import React from "react";

import ProjectDetails from "./ProjectDetails";
import Card from "../Card";
import "../../styles/project.css";

function createCard(ProjectDetail) {
  return (
    <Card
      key={ProjectDetail.id}
      id={ProjectDetail.id}
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
    <>
      <div id="project">
        <section className="project">
          <div className="container">
            <div className="row project-intro">
              <div className="col">
                <h2 className="secondary-heading">Portfolio</h2>
                <p className="heading-desc">
                  Check out some of my latest projects.
                </p>
              </div>
            </div>
            <div className="row">{ProjectDetails.map(createCard)}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
