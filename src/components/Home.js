import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/home.css";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="title-home">
          <h1>
            Hi, I'm <span>AJIT DHDHARIA</span>
          </h1>
          <h3>AN APPLICATION DEVELOPER</h3>
          <a href="#project">VIEW MY WORK</a>
          <a href="https://drive.google.com/file/d/1ngSIsBmTd4lkPSiL0HgRABkWYXtUYh4z/view?usp=sharing" target="_blank">
            VIEW RESUME
          </a>
        </div>
        <div className="graphics">
          <img src="Graphics-home-screen.png" alt="profile"></img>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ajitdhdharia/" target="_blank">
              <LinkedInIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#ff2e63",
                  marginRight: "1rem",
                }}
              />
            </a>
            <a href="https://github.com/ajitdhdharia" target="_blank">
              <GitHubIcon
                style={{
                  width: "35px",
                  height: "35px",
                  color: "#ff2e63",
                  marginLeft: "1rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
