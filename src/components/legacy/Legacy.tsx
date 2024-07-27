import React from "react";
import { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const text = [
  "Pavan's visionary contributions laid the foundation for μPlay.gg, turning a simple idea into a thriving community",
  "His legacy continues to inspire us, fueling our commitment to innovation, inclusivity, and excellence",
  "Pavan’s deep passion for gaming and his pursuit of excellence have shaped the very essence of μPlay.gg, ensuring his spirit remains at the heart of our community",
];

const Card = ({ text }: { text: string }) => {
  return (
    <div className="clip-box md:w-96 min-h-44 p-6 bg-[#0E0E0E] text-lg text-wrap">
      {text}
    </div>
  );
};

function Legacy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setopacity] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setopacity(progress);
  });

  return (
    <div ref={containerRef} style={{ opacity }} className="md:px-28 p-5 mb-32">
      <div className="w-full bg-[#181616] box-center flex-col gap-8 md:p-10 p-8 clip-box">
        <h1 className="text-wrap">
          <span className="font-paladins text-4xl text-center text-wrap">
            MUPLAY&nbsp;:
          </span>
          &nbsp; Pavan’s Legacy and Aspirations for Youth
        </h1>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5">
          {text.map((e, i) => {
            // Apply conditional styling to center the third element
            const isThirdElement = i === 2;
            return (
              <div
                key={i}
                className={
                  isThirdElement
                    ? "md:col-span-2 md:row-span-2 flex justify-center items-center"
                    : ""
                }
              >
                <Card text={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Legacy;
