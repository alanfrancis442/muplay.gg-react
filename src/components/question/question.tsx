import { useState, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Question() {
  const cardContainerRef = useRef(null);
  const container = useRef(null);
  const aboutContainer = useRef(null);
  const joinContainer = useRef(null);
  let mm = gsap.matchMedia();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      mm.add("(min-width: 720px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "15% 50%",
            scrub: 2,
            // markers: true,
          },
        });

        tl.fromTo(
          ".ani-content",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power1.inOut",
            stagger: {
              amount: 0.5,
              from: "start",
              ease: "power1.inOut",
            },
          }
        );

        gsap.fromTo(
          ".char-card",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            duration: 3,
            opacity: 1,
            ease: "power1.inOut",
            stagger: {
              each: 1.5,
              ease: "power1.inOut",
            },
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: "top 80%",
              end: "90% 80%",
              scrub: 2.5,
              // markers: true,
            },
          }
        );

        gsap.fromTo(
          ".about-card",
          {
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: aboutContainer.current,
              start: "top 50%",
              end: "35% 50%",
              scrub: 1,
            },
            duration: 1.5,
            opacity: 1,
            ease: "power1.inOut",
            stagger: 0.5,
          }
        );
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: joinContainer.current,
            start: "top 90%",
            end: "100% 50%",
            scrub: 2,
            // markers: true,
          },
        });
        tl2
          .fromTo(
            joinContainer.current,
            {
              opacity: 0,
            },
            {
              duration: 1.5,
              opacity: 1,
              y: 0,
              ease: "power3.inOut",
            }
          )
          .fromTo(
            ".join-box-text",
            {
              opacity: 0,
            },
            {
              duration: 1.5,
              opacity: 1,
              y: 0,
              ease: "power3.inOut",
              stagger: 0.5,
            }
          );
      });
    },
    { scope: container }
  );

  const data = [
    "“Register and create an account in µlearn platform”",
    "Join our Discord server and discover the realms of Game development, eSports, and Gaming. ",
    "Participate in tournaments, showcase your skills, and connect with gamers",
  ];

  const QuestionCard = ({ index, content }: { index: any; content: any }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="relative z-50 overflow-hidden card group"
      >
        <img
          src={`/questions/Frame${index + 1}.webp`}
          alt="frame"
          height={500}
          width={500}
        />
        <img
          src={`/questions/char${index + 1}.svg`}
          className="absolute top-16 transition-transform duration-300 transform group-hover:scale-110"
          alt="char"
          height={500}
          width={500}
        />
        <div
          className={`absolute tracking-tighter leading-none bottom-2 p-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm left-1/2 -translate-x-[50%] min-w-[80%] min-h-[25%] z-[60]
              ${isActive ? "visible" : "hidden"} transition-all`}
        >
          {content}
        </div>
      </div>
    );
  };

  return (
    <div
      id="about"
      ref={container}
      className="flex flex-col justify-center items-center min-h-screen gap-56 py-32 sm:py-56 sm:pt-40 bg-black"
    >
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[55%] gap-4 text-center">
        <div className={` py-2`}>
          <h1
            className={`ani-content text-4xl font-paladins anitext overflow-hidden`}
          >
            What’s MuPlay?
          </h1>
        </div>
        <div className={`ani-content text-lg py-4 overflow-hidden`}>
          <p>
            muPlay.gg is a premier gaming club established by <b>μLearn</b> and{" "}
            <b>TILTLABS</b>, dedicated to uniting and empowering the gaming
            community. Our platform is structured into three dynamic verticals:
            Game Development, Gamers, and esports, where you can connect, grow,
            and thrive in the gaming universe.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 gap-4 text-center">
        <div
          className={`${styles.cliptext} flex justify-center items-center flex-col`}
        >
          <h1 className="ani-content text-4xl font-paladins">
            Excited right?!
          </h1>
          <p className="ani-content text-lg w-1/2">
            Follow these steps to join the community right now
          </p>
        </div>
        <div
          ref={cardContainerRef}
          className="flex justify-between items-center flex-col md:flex-row gap-10 w-full grop relative z-50"
        >
          {data.map((e, i) => (
            <div key={i} className="char-card ">
              <QuestionCard index={i} content={e} />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={aboutContainer}
        className="md:w-[90%] mulearn and tiltlabs box-center flex-col relative"
      >
        <img
          src={"/questions/muframe.svg"}
          width={1200}
          height={1000}
          alt="frame"
          className="about-card opacity-1"
        />
        <img
          src={"/questions/tiltframe.svg"}
          width={1200}
          height={1000}
          alt="frame"
          className="about-card opacity-1 -translate-y-28 max-md:-translate-y-10"
        />
      </div>
      <div ref={joinContainer} className="w-full box-center join-box-container">
        <div className="clip-box box-center join-box-child w-[90%] text-lg bg-[url(/questions/about.webp)] bg-cover bg-center translate-y-10">
          <div className="join-box-text w-4/5 max-md:w-5/6 py-16 flex flex-col gap-8 justify-between text-center translate-y-10">
            <h1 className="font-paladins text-4xl join-box-text">
              Join the Journey
            </h1>
            <p className="join-box-text">
              Together, <b>µLearn</b> and <b>TILTLABS</b> propel μPlay.gg
              towards new heights, creating a space where gaming is not just a
              hobby but a lifestyle. Join us on this exciting journey as we
              embrace the thrill of competition, the joy of connection, and the
              boundless possibilities that gaming brings to our lives
            </p>
            <p>Welcome to μPlay.gg—where your gaming adventure begins.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
