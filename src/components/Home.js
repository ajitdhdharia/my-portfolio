import React from "react";
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
        demoURL={ProjectDetail.demoURL}
        codeURL={ProjectDetail.codeURL}
      />
    )
  );
}

function Home() {
  return (
    <>
      <section className="conatiner home" id="home">
        <div className="row title-home">
          <div className="col">
            <p className="home-intro">Hello, My name is Ajit Dhdharia</p>
            <p className="home-intro-desc">I make websites.</p>
            <p className="home-desc">
              I'm a front-end developer at Veriday Inc. I also write about the
              web on my blog and make travel videos in spare time.
            </p>
          </div>
        </div>
        <div id="feature-projects-home">
          <div className="row">
            <h3>Projects</h3>
          </div>
          <div className="row">{ProjectDetails.map(createCard)}</div>
        </div>
      </section>
    </>
  );
}

export default Home;
