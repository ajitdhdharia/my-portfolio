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
    <>
      <div className="container project mt-5 mb-3" id="project">
        <div className="row">
          <h3>Projects</h3>
        </div>
        <div>
          <div className="row">{ProjectDetails.map(createCard)}</div>
        </div>
      </div>
    </>
  );
}

export default Project;
