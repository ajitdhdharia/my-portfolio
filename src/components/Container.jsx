"use client";
import React from "react";
import { cn } from "@/utils/cn";

export default function Container({ className, children }) {
  return (
    <>
      <div className={cn("mx-auto bg-white max-w-7xl", className)}>
        {children}
      </div>
    </>
  );
}
