"use client";
import React from "react";
import Image from "next/image";

import Container from "@/components/Container";
import { LaptopScroll } from "@/components/ui/laptop-scroll";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import data from "@/data/projectDetails.json";
import thPic from "../../../../public/images/TH.png";

export default function Page({ params }) {
  const project = data.ProjectDetails.find(
    (project) => project.id == params.project
  );

  const wordsOne = [
    {
      text: "1600",
      className: "text-blue-500",
    },
  ];
  const wordsTwo = [
    {
      text: "AODA",
      className: "text-blue-500",
    },
  ];
  const wordsThree = [
    {
      text: "99.9%",
      className: "text-blue-500",
    },
  ];

  return (
    <Container className="bg-dot-black/[0.1]">
      <div className="overflow-hidden w-full">
        <LaptopScroll
          title={<span>{project.title}</span>}
          src={project.imageURL}
          showGradient={true}
        />
      </div>
      {project.title == "Toronto Hydro" && (
        <>
          <div className="grid grid-cols-1 justify-items-center items-center px-10">
            <div className="text-lg text-center md:text-left text-neutral-700 max-w-4xl font-light lg:px-0 pt-16 ">
              {project.detailDescriptionOne && project.detailDescriptionOne}
            </div>
            <div className="text-lg text-center md:text-left text-neutral-700 max-w-4xl font-light lg:px-0 pt-8 pb-16 ">
              {project.detailDescriptionTwo && project.detailDescriptionTwo}
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center px-10">
            <div className="flex flex-col items-center">
              <TypewriterEffectSmooth className="mb-0" words={wordsOne} />
              <span className="text-md text-neutral-700">
                Simultaneous users/second during outages
              </span>
            </div>
            <div className="flex flex-col items-center">
              <TypewriterEffectSmooth className="mb-0" words={wordsTwo} />
              <span className="text-md text-neutral-700">
                Accessibility compliant
              </span>
            </div>
            <div className="flex flex-col items-center">
              <TypewriterEffectSmooth className="mb-0" words={wordsThree} />
              <span className="text-md text-neutral-700">Uptime</span>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-16 px-0">
            <Image src={thPic} className="w-full" alt="Toronto Hydro" />
          </div>
        </>
      )}
    </Container>
  );
}
