import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ProjectDetails from "./Project/ProjectDetails";
import Card from "./Card";
import { motion } from "framer-motion";

import "../styles/home.css";

function createCard(ProjectDetail) {
  return (
    ProjectDetail.isFeatured && (
      <Card
        key={ProjectDetail.id}
        id={ProjectDetail.id}
        name={ProjectDetail.title}
        description={ProjectDetail.description}
        imageURL={ProjectDetail.imageURL}
        demoURL="/project-demo"
        codeURL={ProjectDetail.codeURL}
      />
    )
  );
}

function Home() {
  return (
    <div id="home">
      <section id="home-intro">
        <div className="container">
          <div className="row home-intro-text">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0, opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="col-lg-4"
            >
              <h1 className="primary-heading">
                Hi there,
                <br /> I'm Ajit Dhdharia
              </h1>
              <p className="heading-desc">
                I'm a Software Developer from Toronto, Canada. I enjoy creating
                and supporting websites and applications using modern
                technologies.
              </p>
              <div className="home-social-icons">
                <span>
                  <a
                    className="social-linkedIn"
                    href="https://www.linkedin.com/in/ajitdhdharia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon"></FaLinkedin>
                  </a>
                </span>
                <span>
                  <a
                    className="social-github"
                    href="https://github.com/ajitdhdharia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon"></FaGithub>
                  </a>
                </span>
                <span>
                  <a
                    className="social-mail"
                    href="mailto:dhdhariaajit@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoGmail className="icon"></BiLogoGmail>
                  </a>
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0, opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="col-lg-8 profile-image"
            >
              <img
                className=""
                src="/images/profile_ajit_short.png"
                alt="profile"
              ></img>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="home-project">
        <div className="container">
          <div className="row">
            <div className="col project-title">
              <h3>Some of my latest work</h3>
            </div>
          </div>
          <div className="row latest-work">
            {ProjectDetails.map(createCard)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
