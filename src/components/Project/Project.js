import React, { useState } from "react";

import ProjectDetails from "./ProjectDetails";
import Card from "../Card";
import "../../styles/project/project.css";

console.log(ProjectDetails.map(createCard));

function createCard(ProjectDetail){
  return(
    <Card 
    key={ProjectDetail.id}
    name={ProjectDetail.title}
    description={ProjectDetail.description}
    link={ProjectDetail.link}
    />
  );
}

function Project() {
  //Tab button styling classes.
  const activeTabButtonClass = "nav-link active tab-button";
  const tabButtonClass = "nav-link tab-button";

  const [currentState, setState] = useState(1);

  function tabClick(index) {
    setState(index);
  }
  console.log(currentState);

  return (
    <div className="container mt-5 mb-5 project">
      {/* Project section Navbar */}
      <div>
        <h3>Projects</h3>
        <hr></hr>
      </div>

      <ul className="nav project-tab">
        <li className="nav-item">
          <button onClick={() => tabClick(1)} className={ currentState === 1 ? activeTabButtonClass : tabButtonClass }>
            All
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => tabClick(2)} className={ currentState === 2 ? activeTabButtonClass : tabButtonClass }>
            Web
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => tabClick(3)} className={ currentState === 3 ? activeTabButtonClass : tabButtonClass }>
            Mobile
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => tabClick(4)} className={ currentState === 4 ? activeTabButtonClass : tabButtonClass }>
            Others
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div className={ currentState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
        <div className="row ">
              
              {ProjectDetails.map(createCard)}
    
            </div>
        </div>
        <div className={ currentState === 2 ? "tab-pane fade show active" : "tab-pane fade" }>
        <div className="row row row-cols-1 row-cols-sm-3">
              <div className="col mb-4">
              <div>

              </div>
                <Card />
              </div>
            </div>
        </div>
        <div className={ currentState === 3 ? "tab-pane fade show active" : "tab-pane fade" } >
        <div className="row row row-cols-1 row-cols-sm-3">
              <div className="col mb-4">
                <Card />
              </div>
            </div>
        </div>
        <div className={ currentState === 4 ? "tab-pane fade show active" : "tab-pane fade" }>
            <div className="row row row-cols-1 row-cols-sm-3">
              <div className="col mb-4">
                <Card />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
