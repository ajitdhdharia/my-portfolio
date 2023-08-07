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
  //useState for tab content.
  const [currentState, setState] = useState(1);

  function tabClick(index) {
    setState(index);
  }

  return (
    <>
      <div className="container project" id="project">
        {/* Project section Navbar */}
        <div className="row">
          <h3>Projects</h3>
        </div>

        <div className="row">
          <div className="row ">{ProjectDetails.map(createCard)}</div>
        </div>
      </div>
    </>
  );
}

export default Project;
