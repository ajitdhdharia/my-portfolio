"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import data from "@/data/projectDetails.json";

export default function Page({ params }) {
  const project = data.ProjectDetails.find(
    (project) => project.id == params.project
  );

  console.log(project.content);
  return (
    <>
      <BackgroundBeams />
      <div className="mt-80 mx-80 mb-20">
        <motion.div
          initial={{ z: -1000 }}
          animate={{ z: 0, opacity: [0, 1] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center items-center"
        >
          <div className="pe-10">
            <div className="text-lg text-center lg:text-left sm:text-3xl lg:text-4xl uppercase text-neutral-700 dark:text-white max-w-4xl font-bold my-1 lg:my-5">
              {project.title}
            </div>
            <div className="text-md lg:text-xl text-center md:text-left text-neutral-700 dark:text-white max-w-4xl font-light px-10 lg:px-0 py-5 ">
              {project.detailDescription}
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              className=""
              src={project.imageURL}
              width={500}
              height={500}
              alt="profile"
            />
          </div>
        </motion.div>
        {project.content && (
          <motion.div
            className="my-20"
            initial={{ z: -1000 }}
            animate={{ z: 0, opacity: [0, 1] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <div className="text-md text-center lg:text-left sm:text-2xl lg:text-3xl uppercase text-neutral-700 dark:text-white max-w-4xl font-bold my-1 lg:my-5">
              Experience
            </div>
            <TracingBeam>
              <div className="pt-10">
                {project.content.map((item, i) => {
                  return (
                    <ul
                      key={i}
                      className="list-disc marker:text-cyan-300 marker:text-2xl pt-5"
                    >
                      <li className="text-md lg:text-xl text-center md:text-left text-neutral-700 dark:text-white max-w-4xl font-light">
                        {item.description}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </TracingBeam>
          </motion.div>
        )}
        {project.subProjects && (
          <div className="mx-auto px-8 my-12">
            <HoverEffect items={project.subProjects} />
          </div>
        )}
        <motion.div
          initial={{ z: -1000 }}
          animate={{ z: 0, opacity: [0, 1] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="flex justify-center flex-wrap mx-40"
        >
          {project.skills.map((item, i) => (
            <span
              key={i}
              className="text-md font-extralight xl:m-2 lg:m-0 py-2 xl:px-4 border rounded-full border-sky-500 whitespace-nowrap shadow-lg shadow-sky-500/20"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
