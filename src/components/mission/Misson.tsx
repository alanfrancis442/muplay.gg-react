import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const aim = [
  {
    "Uniting Gamers":
      "Bringing together individuals from diverse backgrounds to share their passion for gaming",
    image: "/mission/aim1.svg",
  },
  {
    "Development Aid":
      "Providing resources and support for indie game developers to unleash their creativity",
    image: "/mission/aim2.svg",
  },
  {
    "Fostering Competition":
      "Creating an environment where esports enthusiasts can compete at the highest levels.",
    image: "/mission/aim3.svg",
  },
  {
    "Building Community":
      " Promoting a sense of belonging and mutual support among all members. ",
    image: "/mission/aim4.svg",
  },
];

const whatWeDo = [
  {
    title: "Esports Tournaments",
    description:
      "Hosting annual esports championship,Simulate.gg with exciting prizes",
  },
  {
    title: "Game Jams",
    description:
      "Organizing events where developers can come together to create games in a short period",
  },
  {
    title: "Community Events",
    description:
      "Facilitating meetups, online events, talk sessions ,bootcamps  and discussion forums to foster community engagement",
  },
  {
    title: "Educational Programs",
    description:
      " Running courses and workshops through our educational partner, TILTEDU, to nurture the next generation of game developers",
  },
];

const contribure_cards = [
  {
    title: "Hosting Workshops",
    description:
      "Organizing workshops and training sessions led by industry experts.",
  },
  {
    title: "Team Projects",
    description:
      "Featuring indie games and developers on our platform, giving them a stage to shine",
  },
  {
    title: "Showcasing Talent",
    description:
      " Encouraging collaboration between developers, artists, and gamers to create innovative projects",
  },
];

function Misson() {
  const container = useRef(null);
  const missionRef = useRef(null);
  const contribute_cardRef = useRef(null);
  const activityRef = useRef(null!);
  const achiveref = useRef(null);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let mm = gsap.matchMedia();
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

        tl.from(".headding", {
          opacity: 0,
          y: 100,
          duration: 1,
        });
        tl.from(".mission-img", {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.5,
        });

        gsap.from(".content", {
          y: 100,
          duration: 2.5,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            each: 1,
            from: "start",
            ease: "power3.inOut",
          },
          scrollTrigger: {
            trigger: achiveref.current,
            start: "25% 80%",
            end: "80% 80%",
            scrub: 2.5,
            // markers: true,
          },
        });

        gsap.from(".contribute-card", {
          y: 100,
          duration: 2.5,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            each: 1,
            from: "start",
            ease: "power3.inOut",
          },
          scrollTrigger: {
            trigger: contribute_cardRef.current,
            start: "25% 80%",
            end: "80% 80%",
            scrub: 2.5,
            // markers: true,
            // pin: true, // Assuming you want the pinning effect for the whole timeline
          },
        });
        gsap.to(".activity-img", {
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: activityRef.current,
            start: "top 50%",
            end: "50% 50%",
            scrub: true,
            // markers: true,
          },
        });
        gsap.to(".activity-items", {
          x: 0,
          duration: 2.5,
          opacity: 1,
          ease: "power1.inOut",
          stagger: {
            each: 1,
            ease: "power1.inOut",
          },
          scrollTrigger: {
            trigger: activityRef.current,
            start: "top 80%",
            end: "90% 80%",
            scrub: 2.5,
            // markers: true,
          },
        });
      });
    },
    { scope: container }
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div ref={container} className=" pt-12 py-24 box-center flex-col">
      <div
        id="picturediv"
        className="picture-div box-center bg-[url(/mission/mission_bg.webp)] bg-cover bg-center py-28 w-full"
      >
        <div className="box-center flex-col gap-12" ref={missionRef}>
          <h1 className="text-4xl font-paladins text-wrap text-center headding">
            Mission & Vision of muplay.gg
          </h1>
          <div className="flex gap-5 max-md:flex-col items-center justify-center">
            <img
              width={500}
              height={500}
              alt="vision"
              src={"/mission/mission.svg"}
              className="mission-img"
            />
            <img
              width={500}
              height={500}
              alt="vision"
              src={"/mission/vision.svg"}
              className="mission-img"
            />
          </div>
        </div>
      </div>

      <div ref={achiveref} className=" box-center flex-col gap-8 py-32">
        <h1 className="text-4xl font-paladins flex-wrap text-center">
          what we aim to achieve
        </h1>
        {/* <p className="text-lg">μPlay.gg is dedicated to</p> */}
        <div className="clip-box-inverse bg-[#111111] w-[90%]">
          <div className="flex flex-col gap-5 p-12">
            {aim.map((e, i) => {
              return (
                <div key={i} className="flex gap-2 content">
                  <img
                    width={100}
                    height={100}
                    alt="aim"
                    src={`/mission/achive/char${i + 1}.webp`}
                    className="rounded-lg h-16 w-16"
                  />
                  <div className="flex items-center max-md:flex-col">
                    <span className="text-ld font-paladins md:text-nowrap text-wrap md:text-2xl text-xl pr-4">
                      {Object.keys(e)[0]} :
                    </span>
                    <p className="text-wrap md:text-lg text-base">
                      {Object.values(e)[0]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        ref={activityRef}
        className="act flex w-[95%] gap-10 box-center max-md:flex-col py-12"
      >
        <img
          style={{
            clipPath:
              windowWidth > 720
                ? "polygon(0 0, 0 0, 0 0, 0 0)"
                : "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
          }}
          src="/mission/activities.webp"
          alt="activities"
          width={900}
          height={500}
          className="md:w-1/2 activity-img"
        />
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl text-wrap text-center font-paladins">
              activities we do
            </h1>
            <p className="text-wrap text-center">
              {`μPlay.gg is more than just a community—it's a hub of activity.
              Some of our key activities include`}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeDo.map((e, i) => {
              return (
                <div key={i} className="flex gap-5 items-center">
                  <img
                    width={50}
                    height={50}
                    alt="activity"
                    src={"/mission/icon.webp"}
                  />
                  <div
                    style={{
                      transform:
                        windowWidth > 720
                          ? `translateX(${(i + 1) * 10}%)`
                          : "translateX(0%)",
                    }}
                    className={`flex flex-col justify-start items-start activity-items`}
                  >
                    <span className="text-2xl font-bold">{e.title}</span>
                    <p className="w-1/2">{e.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={contribute_cardRef} className="box-center gap-6 flex-col py-24">
        <p className="font-paladins text-4xl text-center text-wrap">
          How We Contribute to the Creative Community
        </p>
        <p className="text-center text-wrap">
          At μPlay.gg, we believe in the power of creativity. We contribute to
          the creative community by:
        </p>
        <div className="flex gap-12 pt-60 max-md:flex-col max-md:gap-48">
          {contribure_cards.map((e, i) => {
            return (
              <div
                key={i}
                className="box-center relative z-0 group contribute-card"
              >
                <img
                  src={`/mission/cards/c${i + 1}img.webp`}
                  width={250}
                  height={250}
                  className={`absolute -top-[40%] group-hover:scale-105 transition-all`}
                  alt="creative"
                />
                <div className=" max-w-80 clip-top bg-gradient-to-t from-[#222222] to-[#151515]">
                  <div className="p-4">
                    <h1 className="font-paladins text-2xl text-center">
                      {e.title}
                    </h1>
                    <p className="text-center py-5 text-base">
                      {e.description}
                    </p>
                  </div>
                  <img
                    src={`/mission/cards/b${i + 1}img.webp`}
                    width={250}
                    height={250}
                    className="w-full"
                    alt="creative"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Misson;
