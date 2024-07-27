import styles from "./style.module.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Button from "../button/page";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Landing() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".text",
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: {
            each: 0.2,
            from: "start",
          },
          ease: "power3.inOut",
        }
      );
    },
    { scope: container, revertOnUpdate: true }
  );
  return (
    <div
      id="home"
      ref={container}
      className={`${styles.main} overflow-hidden relative`}
    >
      {/* <Image src="/landing/landing_cover.png" alt="landing" layout="fill" objectFit="cover" /> */}
      <video
        className="sm:h-full sm:w-full h-screen object-cover"
        muted={true}
        autoPlay={true}
        loop={true}
        src={"/landing_video.mp4"}
      ></video>
      <div
        className={
          "absolute top-1/2 left-12 sm:left-24 flex justify-center items-start gap-3 flex-col "
        }
      >
        <div>
          <h1 className="font-paladins text-5xl text">compete</h1>
          <h1 className="font-paladins text-5xl text">connect</h1>
          <h1 className="font-paladins text-5xl text">create</h1>
          <h2 className="f text">
            Join the ultimate community for Gamers, Gamer Developers and <br />
            eSports enthusiasts{" "}
          </h2>
        </div>
        <div className="text">
          <Button url={"https://mulearn.org/"} label={"Join Now !"} />
        </div>
      </div>
      <div className={styles.bgFilter}></div>
    </div>
  );
}

export default Landing;
