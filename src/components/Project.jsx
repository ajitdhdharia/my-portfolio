"use client";
import React from "react";
import Image from "next/image";

import { LaptopScroll } from "./ui/laptop-scroll";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Project({ project, words }) {
  return (
    <>
      <div className="overflow-hidden w-full">
        <LaptopScroll
          title={<span>{project.title}</span>}
          src={project.imageURL}
          showGradient={true}
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center items-center px-10 pb-10">
        {project.detailDescription.map((item, index) => {
          return (
            <div
              key={index}
              className="text-lg text-center md:text-left text-neutral-700 max-w-4xl font-light lg:px-0 pt-8 "
            >
              {item}
            </div>
          );
        })}
      </div>
      {project.title === "Toronto Hydro" && (
        <div className="grid grid-cols-3 justify-items-center px-10">
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsOne} />
            <span className="text-md text-neutral-700">
              Simultaneous users/second during outages
            </span>
          </div>
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsTwo} />
            <span className="text-md text-neutral-700">
              Accessibility compliant
            </span>
          </div>
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsThree} />
            <span className="text-md text-neutral-700">Uptime</span>
          </div>
        </div>
      )}
      {project.imagePages && (
        <div className="grid grid-cols-1 mt-16 px-0">
          <img
            src={project.imagePages}
            className="w-full"
            alt="Toronto Hydro"
          />
        </div>
      )}
    </>
  );
}

export default Project;
