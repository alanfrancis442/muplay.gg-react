import styles from "./style.module.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import Button from "../button/page";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Landing({ setisLoading }: { setisLoading: (value: boolean) => void }) {
  const [progress, setprogress] = useState(0);
  const container = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { contextSafe } = useGSAP({ scope: container });
  const removeLoader = contextSafe(() => {
    gsap.to(container.current, {
      delay: 0.01,
      duration: 1.5,
      ease: "power1.inOut",
      clipPath: "circle(100% at 50% 50%)",
      onComplete: () => {
        setisLoading(false);
        videoRef.current?.play();
        animateText();
      },
    });
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setprogress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          removeLoader();
          return 100;
        }
        return prev + 1;
      });
    }, 45);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const animateText = contextSafe(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".text", {
      y: 0,
      duration: 1,
      opacity: 1,
      stagger: {
        each: 0.2,
        from: "start",
      },
      ease: "power3.inOut",
    });
  });
  // useGSAP(
  //   () => {

  //   },
  //   { scope: container }
  // );
  return (
    <>
      <div className=" min-h-[100dvh] absolute w-full box-center flex-col text-white">
        <div className="flex justify-start flex-col gap-3">
          <div className="box-center text-4xl md:text-6xl font-bold">
            <span className="font-paladins pr-5">muplay</span> is loading...
          </div>
          <div
            style={{ width: `${progress}%` }}
            className="bg-[rgba(226,13,74,1)] h-1 rounded-lg"
          />
          <div className="absolute bottom-16 right-16 text-6xl">
            {progress}%
          </div>
        </div>
      </div>
      <div
        id="home"
        ref={container}
        className={`${styles.main} overflow-hidden relative  landing-clip`}
      >
        {/* <Image src="/landing/landing_cover.png" alt="landing" layout="fill" objectFit="cover" /> */}
        <video
          className="sm:h-full sm:w-full h-screen object-cover"
          muted={true}
          autoPlay={false}
          loop={true}
          src={"/landing_video.mp4"}
          ref={videoRef}
        ></video>
        <div
          className={
            "absolute top-1/2 left-12 sm:left-24 flex justify-center items-start gap-3 flex-col "
          }
        >
          <div>
            <h1 className="font-paladins text-5xl text opacity-0 translate-y-10">
              compete
            </h1>
            <h1 className="font-paladins text-5xl text opacity-0 translate-y-10">
              connect
            </h1>
            <h1 className="font-paladins text-5xl text opacity-0 translate-y-10">
              create
            </h1>
            <h2 className="f text opacity-0 translate-y-10">
              Join the ultimate community for Gamers, Gamer Developers and{" "}
              <br />
              eSports enthusiasts{" "}
            </h2>
          </div>
          <div className="text opacity-0 translate-y-10">
            <Button url={"https://mulearn.org/"} label={"Join Now !"} />
          </div>
        </div>
        <div className={styles.bgFilter}></div>
      </div>
    </>
  );
}

export default Landing;
