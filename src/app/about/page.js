"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Container from "@/components/Container";

import {
  IconBrandGithubFilled,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import aboutPic from "../../../public/images/ajit_professional.webp";
import authorAvatar from "../../../public/images/ajit_profile_solid_color.webp";

const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

const Page = () => {
  return (
    <Container className="py-24 lg:py-32 px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal text-gray-700">
        Making the softwares better - one line of code at a time
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 justify-between">
        <div>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-8">
            Hey there, I&apos;m Ajit Dhdharia - a seasoned Software Engineer
            with a deep passion for crafting exceptional digital experiences.
            Welcome to my corner of the digital world!
          </p>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-4">
            Since the early days of my journey, I&apos;ve been captivated by the
            art of turning lines of code into functional and elegant solutions.
            My goal is to not just create software but to build digital marvels
            that seamlessly merge form and function.
          </p>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-4">
            But my journey doesn&apos;t stop at coding. With a heart full of
            innovation and a mind brimming with ideas, I&apos;ve consistently
            pushed the boundaries of technology and design. From developing
            scalable software services to leading teams in agile environments,
            I&apos;ve dedicated my career to building high-quality user
            interfaces and enhancing backend integrations.
          </p>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-4">
            Through this narrative, I aim to share my insights, experiences, and
            creations with you. Whether you&apos;re a fellow developer seeking
            solutions, a designer in search of inspiration, or simply someone
            who appreciates the finer aspects of technology, there&apos;s
            something here for you.
          </p>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-4">
            Join me on this journey of bytes and narratives, logic and
            creativity, code and design. Together, we can explore the boundless
            possibilities of technology and storytelling, all while reveling in
            the sheer beauty of thoughtful design.
          </p>
          <p className="text-md text-gray-700 font-light leading-relaxed pt-4">
            {" "}
            Thank you for being here, and I can&apos;t wait to embark on this
            adventure with you.
          </p>
        </div>
        <div className="my-auto p-8 sm:px-32 lg:p-8 ">
          <FollowerPointerCard
            title={
              <TitleComponent title="Ajit Dhdharia" avatar={authorAvatar} />
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image src={aboutPic} alt="thumbnail" />
              </div>
            </div>
          </FollowerPointerCard>
          <div className="grid grid-cols-1 pt-10">
            <Link href="https://github.com/ajitdhdharia">
              <div className="flex py-2">
                <IconBrandGithubFilled className="h-6 w-6 p-1 text-white border rounded-full border-gray-700 bg-gray-700 hover:bg-purple-500 hover:border-purple-500" />
                <span className="text-md self-center text-gray-700 hover:text-purple-500 pl-3">
                  Follow on GitHub
                </span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/ajitdhdharia/">
              <div className="flex py-2">
                <IconBrandLinkedin className="h-6 w-6 p-1 text-white border rounded-full border-gray-700 bg-gray-700 hover:bg-purple-500 hover:border-purple-500" />
                <span className="text-md self-center text-gray-700 hover:text-purple-500 pl-3">
                  Follow on LinkedIn
                </span>
              </div>
            </Link>
            <Link href="https://twitter.com/ADhdharia">
              <div className="flex py-2">
                <IconBrandX className="h-6 w-6 p-1 text-white border rounded-full border-gray-700 bg-gray-700 hover:bg-purple-500 hover:border-purple-500" />
                <span className="text-md self-center text-gray-700 hover:text-purple-500 pl-3">
                  Follow on X
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
