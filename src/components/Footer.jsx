"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";

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
          "relative flex justify-center items-center bg-white dark:bg-black w-full group border-t border-slate-800"
        )}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
        <motion.div
          className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
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

        <div className="text-gray-400 sm:px-10 py-8 mx-auto grid sm:grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-80 z-20">
          <div className="justify-self-start">
            <p className="font-light text-center text-xl">
              ©{year} Ajit Dhdharia. All rights reserved.
            </p>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <div className="flex space-x-16">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <IconBrandGithubFilled />
                </a>
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <IconBrandInstagram />
                </a>
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <IconBrandLinkedin />
                </a>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
