"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <div
        className={cn(
          "relative flex justify-center items-center bg-white w-full group border-t border-gray-100"
        )}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-dot-thick-neutral-100 pointer-events-none" />
        <motion.div
          className="pointer-events-none bg-dot-thick-indigo-200 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          }}
        />

        <div className="py-4 mx-auto grid grid-cols-1 z-20">
          <span className="text-md self-center text-gray-600 tracking-tight">
            ©{year} Ajit Dhdharia. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
