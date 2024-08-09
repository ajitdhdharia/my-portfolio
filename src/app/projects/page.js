"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Container from "@/components/Container";

import data from "@/data/projectDetails.json";

function createCard(item, key) {
  return (
    <Link href={`projects/${item.id}`}>
      <CardContainer className="inter-var" key={key}>
        <CardBody className="flex-1 bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600"
          >
            {item.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2"
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
        </CardBody>
      </CardContainer>
    </Link>
  );
}

export default function Page() {
  return (
    <Container className="bg-dot-black/[0.1]">
      <div className="lg:p-20">
        <div className="text-lg text-center md:text-left sm:text-3xl lg:text-4xl uppercase text-gray-700 max-w-4xl font-bold my-5">
          Projects Portfolio
        </div>
        <div className="text-md lg:text-xl text-center md:text-left text-gray-700 max-w-4xl font-light px-10 md:px-0 pb-10 ">
          Take a look at the latest work I have been involved in and explore the
          various initiatives and developments I have been working on recently
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.ProjectDetails.map((item, i) => createCard(item, i))}
        </div>
      </div>
    </Container>
  );
}
