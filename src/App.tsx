import { useEffect, useRef, useState } from "react";
import Navbar from "./components/nav/page";
import Landing from "./components/landing/page";
import Question from "./components/question/question";
import Legacy from "./components/legacy/Legacy";
import Misson from "./components/mission/Misson";
import Cap from "./components/cap/Cap";
import Events from "./components/allEvents/Events";
import Simulate from "./components/simulation/page";
import Teams from "./components/teams/page";
// import Career from "./components/career/Career";
import Partners from "./components/partners/page";
import Footer from "./components/footer/page";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null!);
  const [isLoading, setisLoading] = useState(true);
  const lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
    syncTouch: true,
    syncTouchLerp: 0.05,
  });
  // useLayoutEffect(() => {

  // }, []);

  useEffect(() => {
    if (isLoading) {
      console.log("paused");
      lenis.stop();
    } else {
      console.log("started");

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
      lenis.start();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.registerPlugin(ScrollTrigger);
    }
  }, [isLoading]);

  return (
    <>
      <div
        data-scroll
        data-scroll-container
        ref={scrollRef}
        className="overflow-hidden bg-black text-white absolute top-0 w-full min-h-[100dvh]"
      >
        <Navbar isLoading={isLoading} />
        <Landing setisLoading={setisLoading} />
        <Question />
        <Legacy />
        <Misson />
        <Cap />
        <Events />
        <Simulate />
        <Teams />
        {/* <Career /> */}
        <Partners />
        <Footer />
      </div>
    </>
  );
}
