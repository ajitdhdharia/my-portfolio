"use client";
import React from "react";
import Container from "@/components/Container";

import Project from "@/components/Project";
import data from "@/data/projectDetails.json";

export default function Page({ params }) {
  const project = data.ProjectDetails.find(
    (project) => project.id == params.project
  );

  const wordsTH = {
    wordsOne: [
      {
        text: "1600",
        className: "text-blue-500",
      },
    ],
    wordsTwo: [
      {
        text: "AODA",
        className: "text-blue-500",
      },
    ],
    wordsThree: [
      {
        text: "99.9%",
        className: "text-blue-500",
      },
    ],
  };

  return (
    <Container className="bg-dot-black/[0.1] pb-20">
      <Project project={project} words={wordsTH} />
    </Container>
  );
}
