"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--emerald-900)",
    "var(--indigo-900)",
    "var(--orange-900)",
    "var(--yellow-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        shadow: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[10rem] no-scrollbar overflow-y-auto flex justify-center relative rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start w-full">
        <ul className="max-w-2xl">
          {content.map((item, index) => (
            <motion.li
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              key={item.title + index}
              className="text-lg text-slate-300 mb-10"
            >
              {item.description}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
