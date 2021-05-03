import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import CodeIcon from "@material-ui/icons/Code";

import "../styles/home.css";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="title-home">
          <h1>
            Hi, I'm <span>AJIT DHDHARIA</span>
          </h1>
          {/* <h3>An Application Developer</h3> */}
          <p>
            An application developer located in Canada. I am proficient in
            development for web based and mobile based applications.
          </p>
          <div className="cta">
            <a href="#project">VIEW MY WORK</a>
            <a
              href="https://drive.google.com/file/d/1ngSIsBmTd4lkPSiL0HgRABkWYXtUYh4z/view?usp=sharing"
              target="_blank"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
        <div className="graphics">
          <img src="Graphics-home-screen.png" alt="profile"></img>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ajitdhdharia/" target="_blank">
              <LinkedInIcon className="social-icons" />
            </a>
            <a href="https://github.com/ajitdhdharia" target="_blank">
              <GitHubIcon className="social-icons" />
            </a>
            <a href="mailto:dhdhariaajit@gmail.com" target="_blank">
              <MailIcon className="social-icons" />
            </a>
            <a
              href="https://github.com/ajitdhdharia/my-portfolio"
              target="_blank"
            >
              <CodeIcon className="social-icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
