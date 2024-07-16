"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Container from "@/components/Container";
import blogsData from "@/data/blogsDetails.json";

function createCard(item, key) {
  const imgURL = item.imageURL;
  return (
    <Link href={`blogs-content/${item.blogURL}`} key={key}>
      <div className="max-w-xs w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card rounded-md shadow-xl  max-w-sm mx-auto flex flex-col p-4"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-slate-700 group-hover/card:bg-black opacity-70"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <Image
              height="100"
              width="100"
              alt="Avatar"
              src="/images/ajit_professional.jpg"
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {item.author}
              </p>
              <p className="text-sm text-gray-400">{item.readTime}</p>
            </div>
          </div>
          <div className="text content pt-8">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {item.title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

const page = () => {
  return (
    <Container className="bg-dot-black/[0.1]">
      <div className="pt-40 lg:p-20">
        <div className="text-lg text-center md:text-left sm:text-3xl lg:text-4xl uppercase text-neutral-700 max-w-4xl font-bold mt-5 mb-1">
          Writings on software development
        </div>
        <div className="text-md lg:text-xl text-center md:text-left text-neutral-700 max-w-4xl font-light px-10 md:px-0 pb-5 pt-1 ">
          All of my long-form thoughts on software development, programming,
          coding advice and other fun stuff
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.BlogsDetails.map((item, i) => createCard(item, i))}
        </div>
      </div>
    </Container>
  );
};

export default page;
