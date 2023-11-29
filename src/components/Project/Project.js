import React from "react";

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
      imageURL={ProjectDetail.imageURL}
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
          <p className="heading-desc">Check out some of my latest projects.</p>
        </div>
        <div>
          <div className="row">{ProjectDetails.map(createCard)}</div>
        </div>
      </div>
    </section>
  );
}

export default Project;
