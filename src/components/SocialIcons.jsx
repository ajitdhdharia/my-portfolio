"use client";
import React from "react";
import clsx from "clsx";

import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function SocialIcons({ className }) {
  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      image: "/images/github.webp",
      link: "https://github.com/ajitdhdharia",
    },
    {
      id: 2,
      name: "LinkedIn",
      image: "/images/linkedin.webp",
      link: "https://www.linkedin.com/in/ajitdhdharia/",
    },
    {
      id: 3,
      name: "Twitter",
      image: "/images/twitter.webp",
      link: "https://twitter.com/ADhdharia",
    },
  ];

  return (
    <div
      className={clsx(
        "flex items-center justify-center lg:justify-start w-full",
        className
      )}
    >
      <AnimatedTooltip items={socialMedia} />
    </div>
  );
}
