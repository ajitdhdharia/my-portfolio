import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ProjectDetails from "./Project/ProjectDetails";
import Card from "./Card";

import "../styles/home.css";

function createCard(ProjectDetail) {
  return (
    ProjectDetail.isFeatured && (
      <Card
        key={ProjectDetail.id}
        name={ProjectDetail.title}
        description={ProjectDetail.description}
        imageURL={ProjectDetail.imageURL}
        demoURL={ProjectDetail.demoURL}
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
            <div className="col-md-4">
              <h1 className="primary-heading">
                Hi there,
                <br /> I'm Ajit Dhdharia
              </h1>
              <p className="heading-desc">
                I'm a front-end developer from Toronto, Canada. I enjoy creating
                and supporting websites and applications using modern
                technologies.
              </p>
              <div className="home-social-icons">
                <span>
                  <a
                    className="social-linkedIn"
                    href="https://www.linkedin.com/in/ajitdhdharia/"
                  >
                    <FaLinkedin className="icon"></FaLinkedin>
                  </a>
                </span>
                <span>
                  <a
                    className="social-github"
                    href="https://github.com/ajitdhdharia"
                  >
                    <FaGithub className="icon"></FaGithub>
                  </a>
                </span>
                <span>
                  <a
                    className="social-mail"
                    href="https://www.instagram.com/wanderwithajit/"
                  >
                    <BiLogoGmail className="icon"></BiLogoGmail>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-8 profile-image">
              <img
                className=""
                src="/images/profile_ajit_short.png"
                alt="profile"
              ></img>
            </div>
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
