"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconBrandProducthunt,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconBrandProducthunt className="h-4 w-4 text-neutral-500" />
      ),
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav className="drop-shadow-xl" navItems={navItems} />
    </div>
  );
}

export default Navbar;
