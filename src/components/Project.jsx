"use client";
import React from "react";

import { LaptopScroll } from "./ui/laptop-scroll";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";

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
              className="text-lg text-left text-neutral-700 max-w-4xl font-light lg:px-0"
            >
              {item}
            </div>
          );
        })}
      </div>
      {project.title !== "Toronto Hydro" && (
        <div className="flex flex-col sm:flex-row justify-center items-center pb-16">
          {project.demoURL && (
            <Link
              href={project.demoURL}
              target="_blank"
              className="sm:px-16 py-4"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-white rounded-[6px] text-neutral-700 hover:text-white relative group transition duration-200 hover:bg-transparent">
                  Click to visit website
                </div>
              </button>
            </Link>
          )}
          {project.codeURL && (
            <Link
              href={project.codeURL}
              target="_blank"
              className="sm:px-16 py-4"
            >
              <div className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-white rounded-[6px] text-neutral-700 hover:text-white relative group transition duration-200 hover:bg-transparent">
                  Click to view codebase
                </div>
              </div>
            </Link>
          )}
          {project.docURL && (
            <Link
              href={project.docURL}
              target="_blank"
              className="sm:px-16 py-4"
            >
              <div className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-white rounded-[6px] text-neutral-700 hover:text-white relative group transition duration-200 hover:bg-transparent">
                  Click to view documentation
                </div>
              </div>
            </Link>
          )}
        </div>
      )}
      {project.title === "Toronto Hydro" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center px-10 pb-20">
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsOne} />
            <span className="text-md text-neutral-700 text-center">
              Simultaneous users/second during outages
            </span>
          </div>
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsTwo} />
            <span className="text-md text-neutral-700 text-center">
              Accessibility compliant
            </span>
          </div>
          <div className="flex flex-col items-center">
            <TypewriterEffectSmooth className="mb-0" words={words.wordsThree} />
            <span className="text-md text-neutral-700 text-center">Uptime</span>
          </div>
        </div>
      )}
      {project.imagePages && (
        <div className="grid grid-cols-1 lg:mt-16 px-0">
          <img
            src={project.imagePages}
            className="w-full"
            alt={project.title}
          />
        </div>
      )}
    </>
  );
}

export default Project;
