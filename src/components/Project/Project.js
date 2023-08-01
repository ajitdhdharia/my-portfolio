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
      imageURL={ProjectDetail.imageURL}
    />
  );
}

function Project() {
  //Tab button styling classes.
  const activeTabButtonClass = "nav-link active tab-button";
  const tabButtonClass = "nav-link tab-button";

  const webProjectDetails = ProjectDetails.filter(function (ProjectDetail) {
    return ProjectDetail.category === "web";
  });

  const mobileProjectDetails = ProjectDetails.filter(function (ProjectDetail) {
    return ProjectDetail.category === "mobile";
  });

  const othersProjectDetails = ProjectDetails.filter(function (ProjectDetail) {
    return ProjectDetail.category === "others";
  });

  //useState for tab content.
  const [currentState, setState] = useState(1);

  function tabClick(index) {
    setState(index);
  }

  return (
    <>
      <div className="project py-5" id="project">
        <div className="container pb-5">
          {/* Project section Navbar */}
          <div>
            <h3>PROJECTS</h3>
            <hr></hr>
          </div>

          <ul className="nav project-tab">
            <li className="nav-item">
              <button
                onClick={() => tabClick(1)}
                className={
                  currentState === 1 ? activeTabButtonClass : tabButtonClass
                }
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => tabClick(2)}
                className={
                  currentState === 2 ? activeTabButtonClass : tabButtonClass
                }
              >
                Web
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => tabClick(3)}
                className={
                  currentState === 3 ? activeTabButtonClass : tabButtonClass
                }
              >
                Mobile
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => tabClick(4)}
                className={
                  currentState === 4 ? activeTabButtonClass : tabButtonClass
                }
              >
                Others
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className={
                currentState === 1
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
            >
              <div className="row ">{ProjectDetails.map(createCard)}</div>
            </div>
            <div
              className={
                currentState === 2
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
            >
              <div className="row ">{webProjectDetails.map(createCard)}</div>
            </div>
            <div
              className={
                currentState === 3
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
            >
              <div className="row ">{mobileProjectDetails.map(createCard)}</div>
            </div>
            <div
              className={
                currentState === 4
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
            >
              <div className="row ">{othersProjectDetails.map(createCard)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
