import React from "react";
import { useParams } from "react-router-dom";
import SkillsChart from "./SkillsChart";
import ProjectDetails from "./Project/ProjectDetails";
import Card from "./Card";
import "../styles/projectDemo.css";

function getData(id) {
  const project = ProjectDetails.find(
    (element) => element["id"].toString() === id
  );
  if (project) {
    console.log("data in loop", project.data);
    return project;
  } else {
    console.log("Project not found");
    return null;
  }
}

function createCard(ProjectDetail) {
  return (
    <Card
      key={ProjectDetail.id}
      id={ProjectDetail.id}
      name={ProjectDetail.title}
      description={ProjectDetail.description}
      imageURL={ProjectDetail.imageURL}
      demoURL="/project-demo"
      codeURL={ProjectDetail.codeURL}
    />
  );
}

const ProjectDemo = () => {
  const { id } = useParams();
  const projectData = getData(id);

  const getRandomProject = (ProjectDetails, count) => {
    const shuffledProject = ProjectDetails.sort(() => Math.random() - 0.5);
    return shuffledProject.slice(0, count);
  };

  const randomProject = getRandomProject(ProjectDetails, 3);

  return (
    <>
      <div id="projectDemo">
        <section className="project-demo-intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 intro-text">
                <h2 className="secondary-heading">{projectData.title}</h2>
                <h3 className="tertiary-heading">{projectData.description}</h3>
                <p>{projectData.detailDescription}</p>
              </div>
              <div className="col-lg-6">
                <img
                  className=""
                  src={projectData.imageURL}
                  alt="profile"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <div className="row project-skills-intro">
              <div className="col ">
                <h2 className="secondary-heading skills-heading">Skills </h2>
                <h3 className="tertiary-heading">
                  Expertise Employed for {projectData.title} Application
                  Development
                </h3>
              </div>
            </div>
            <div className="row project-skills">
              <SkillsChart data={projectData.data} />
            </div>
          </div>
        </section>
        <section className="other-projects">
          <div className="container">
          <div className="row">
          <h2 className="secondary-heading">Other Projects</h2>
          </div>
            <div className="row">{randomProject.map(createCard)}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDemo;
