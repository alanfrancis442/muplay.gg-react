"use client";
import { useLayoutEffect, useRef } from "react";
import Navbar from "./components/nav/page";
import Landing from "./components/landing/page";
import Question from "./components/question/question";
import Legacy from "./components/legacy/Legacy";
import Misson from "./components/mission/Misson";
import Cap from "./components/cap/Cap";
import Events from "./components/allEvents/Events";
import Simulate from "./components/simulation/page";
import Teams from "./components/teams/page";
import Career from "./components/career/Career";
import Partners from "./components/partners/page";
import Footer from "./components/footer/page";

import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null!);
  useLayoutEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.02,
    });
  }, []);

  // useLayoutEffect(() => {
  //   setIsClient(true); // Component has mounted, we are now client-side
  //   if (scrollRef.current && isClient) {
  //     import("locomotive-scroll").then((LocomotiveScrollModule) => {
  //       const LocomotiveScroll = LocomotiveScrollModule.default;
  //       const locomotiveScroll = new LocomotiveScroll({
  //         el: scrollRef.current,
  //         smooth: true,
  //         lerp: 0.02,
  //       });
  //       setTimeout(() => {
  //         try {
  //           locomotiveScroll.update();
  //         } catch (e) {
  //           console.error(e);
  //         }
  //       }, 5000);

  //       return () => {
  //         if (locomotiveScroll) locomotiveScroll.destroy();
  //       };
  //     });
  //   }
  // }, [isClient]); // Depend on isClient to re-run effect when it changes

  return (
    <>
      <Navbar />
      <div
        data-scroll
        data-scroll-container
        ref={scrollRef}
        className="overflow-hidden bg-black text-white absolute top-0 w-full"
      >
        <Landing />
        <Question />
        <Legacy />
        <Misson />
        <Cap />
        <Events />
        <Simulate />
        <Teams />
        <Career />
        <Partners />
        <Footer />
      </div>
    </>
  );
}
