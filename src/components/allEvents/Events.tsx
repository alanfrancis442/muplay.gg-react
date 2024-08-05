import Carousel from "./carousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
const images = [
  "/allEvents/img1.webp",
  "/allEvents/img2.webp",
  "/allEvents/img3.webp",
  "/allEvents/img4.webp",
  "/allEvents/img5.webp",
  "/allEvents/img6.webp",
];

export default function Events(): JSX.Element {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.update();
      gsap.to(".carousel", {
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "50% 50%",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div
        ref={container}
        className=" mb-64 flex flex-col justify-center items-center gap-5 text-center"
      >
        <h1 className="font-paladins text-4xl">Our Previous Events</h1>
        <p className="text-base">
          Explore the highlights and key moments from our past events
        </p>
        <div
          style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
          className="md:px-32 md:pt-12 relative z-[999] w-full h-full carousel"
        >
          <Carousel slides={images} />
        </div>
      </div>
    </>
  );
}
