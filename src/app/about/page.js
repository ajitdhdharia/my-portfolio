"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Ajit Dhdharia",
  image: "/images/ajit_professional.jpg",
  authorAvatar: "/images/ajit_profile_solid_color.png",
};

const Page = () => {
  const introduction = `I'm Ajit, a software developer from Toronot, Canada. I've
            been programming for quite a few years now, but I honestly
            didn't love it at first. During my studies at the Army
            Institute of Technology I got introduced to lots of different coding
            topics, but it never really clicked for me. It wasn't until the
            end of 2016 when I decided to google 'how to make a
            website' that coding really started to make sense. I began with
            the classic HTML and CSS, building small (and ugly) websites for
            myself, and since then I've been working hard to level up my
            development skills to where I am today - even though I still have
            plenty of stuff to learn. In the last few years I've been
            diving deep into the modern JavaScript world: exploring the latest
            frameworks, libraries and tools, and learning how to build fast,
            accessible and scalable web applications. For now my go-to stack is
            MERN, but I'm always keeping an eye on the ecosystem for what
            comes next. I've also really been enjoying the creative side of
            front-end, using libraries like Framer Motion and gsap to build
            beautiful and interactive user interfaces.`;

  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      image: "/images/github.png",
    },
    {
      id: 2,
      name: "LinkedIn",
      image: "/images/linkedin.png",
    },
    {
      id: 3,
      name: "Instagram",
      image: "/images/instagram.png",
    },
  ];

  const booksLike = [
    "clean_code.png",
    "pragmatic.png",
    "refactoring.png",
    "Atomic_habits.png",
    "Ikigai.png",
    "psychology_of_money.png",
    "steal_like_an _artist.png",
  ];

  return (
    <div className="bg-slate-950">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 250 }}
          whileInView={{ opacity: 1, y: 150 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          Making the web a better place
          <br /> one line of code at a time
        </motion.h1>
      </LampContainer>

      <div className="grid grid-cols-3 justify-center items-center">
        <TextGenerateEffect
          className="col-span-2 text-left pb-16 self-start"
          words={introduction}
        />
        <motion.div
          initial={{ z: -1000 }}
          animate={{ z: 0, opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="w-96 my-auto"
        >
          <FollowerPointerCard
            title={
              <TitleComponent
                title={blogContent.author}
                avatar={blogContent.authorAvatar}
              />
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src={blogContent.image}
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </FollowerPointerCard>

          <div className="flex flex-row items-center justify-center my-16 w-full">
            <AnimatedTooltip items={socialMedia} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
