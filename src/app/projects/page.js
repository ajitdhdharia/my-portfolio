"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import data from "@/data/projectDetails.json";

function createCard(item, key) {
  return (
    <CardContainer className="inter-var" key={key}>
      <CardBody className="flex-1 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {item.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={item.imageURL}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-start items-center mt-5">
          <Link href={`projects/${item.id}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Details
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default function Page() {
  return (
    <>
      <BackgroundBeams />
      <div className="p-10 pt-40 lg:p-40  bg-zinc-950">
        <div className="text-lg text-center md:text-left sm:text-3xl lg:text-4xl uppercase text-neutral-700 dark:text-white max-w-4xl font-bold my-5">
          Projects Portfolio
        </div>
        <div className="text-md lg:text-xl text-center md:text-left text-neutral-700 dark:text-white max-w-4xl font-light px-10 md:px-0 py-5 ">
          Take a look at the latest work I have been involved in and explore the
          various initiatives and developments I have been working on recently
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.ProjectDetails.map((item, i) => createCard(item, i))}
        </div>
      </div>
    </>
  );
}
