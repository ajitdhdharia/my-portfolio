import React, { useState } from "react";

import ProjectDetails from "./ProjectDetails";
import Card from "../Card";
import "../../styles/project.css";

function createCard(ProjectDetail) {
  return (
    <Card
      key={ProjectDetail.id}
      name={ProjectDetail.title}
      description={ProjectDetail.description}
      demoURL={ProjectDetail.demoURL}
      codeURL={ProjectDetail.codeURL}
    />
  );
}

function Project() {
  return (
    <section id="project">
      <div className="container project">
        <div className="row">
          <h3>Portfolio</h3>
        </div>
        <div>
          <div className="row">{ProjectDetails.map(createCard)}</div>
        </div>
      </div>
    </section>
  );
}

export default Project;
