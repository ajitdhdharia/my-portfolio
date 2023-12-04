import React from "react";
import { useParams } from "react-router-dom";
import SkillsChart from "./SkillsChart";
import ProjectDetails from "./Project/ProjectDetails";
import Card from "./Card";
import { motion } from "framer-motion";
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
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0, opacity: [0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                className="col-lg-6 intro-text"
              >
                <h2 className="secondary-heading">{projectData.title}</h2>
                <h3 className="tertiary-heading">{projectData.description}</h3>
                <p>{projectData.detailDescription}</p>
              </motion.div>
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0, opacity: [0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                className="col-lg-6"
              >
                <img
                  className=""
                  src={projectData.imageURL}
                  alt="profile"
                ></img>
              </motion.div>
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
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                offscreen: {
                  scale: 0,
                  opacity: 0,
                },
                onscreen: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    ease: "easeInOut",
                    bounce: 0.2,
                    duration: 1.2,
                  },
                },
              }}
              className="row project-skills"
            >
              <SkillsChart data={projectData.data} />
            </motion.div>
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
