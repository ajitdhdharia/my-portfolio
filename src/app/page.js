"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import Container from "@/components/Container";
import SocialIcons from "@/components/SocialIcons";

import data from "@/data/projectDetails.json";

export default function Page() {
  const words = [
    {
      text: "Some",
    },
    {
      text: "of",
    },
    {
      text: "my",
    },
    {
      text: "latest work.",
      className: "text-blue-500",
    },
  ];

  return (
    <Container className="pt-0">
      <motion.main
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <section>
          <HeroHighlight>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[7rem] h-[7rem] mt-8">
              <div className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                  <Image
                    src="/images/ajit_profile_solid_color.png"
                    className="bg-black rounded-full"
                    alt="profile"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center">
              <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 max-w-5xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto ">
                <div>
                  <Highlight className="text-gray-700">
                    Hi there, I&apos;m Ajit Dhdharia
                  </Highlight>
                  <div className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl font-light my-5">
                    I&apos;m a Software Developer from Toronto, Canada. I enjoy
                    creating and supporting websites and applications using
                    modern technologies.
                  </div>
                  <SocialIcons />
                </div>
              </h1>
            </div>
          </HeroHighlight>
        </section>
        <section className="grid grid-cols-1 justify-items-center py-10 px-14">
          <TypewriterEffectSmooth words={words} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-10">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              href={`projects/${data.ProjectDetails[0].id}`}
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Toronto Hydro
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Toronto Hydro Corporation is an electric utility that operates
                  the electricity distribution system for the city of Toronto,
                  Ontario, Canada. As of 2018, it serves approximately 772,000
                  customers and delivers approximately 19% of the electricity
                  consumed in Ontario.
                </p>
              </div>
              <Image
                src="/images/toronto-hydro.png"
                width={500}
                height={500}
                alt="Toronto Hydro"
                className="absolute -right-4 xl:-right-[20%] lg:-right-[30%] grayscale filter -bottom-22 lg:-bottom-14 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard
              containerClassName="col-span-1 min-h-[300px]"
              href={`projects/${data.ProjectDetails[2].id}`}
            >
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                React Dock
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Curated and developed a comprehensive showcase of React
                projects, highlighting diverse react skills and innovative
                projects.
              </p>
            </WobbleCard>
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
              href={`projects/${data.ProjectDetails[1].id}`}
            >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  IndieWares
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Developing personalized e-commerce platform, leveraging
                  technologies like React and Node.js to create a responsive and
                  feature-rich online shopping experience. Implementing
                  innovative solutions for enhanced user interaction, secure
                  transactions, and streamlined product management.
                </p>
              </div>
              <Image
                src="/images/indieWare.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 xl:-right-[20%] lg:-right-[5%] -bottom-18 lg:-bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </section>
      </motion.main>
    </Container>
  );
}
