import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="social-links">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/ajitdhdharia/"
            target="_blank"
          >
            <LinkedInIcon className="social-icons" />
          </a>
          <a
            title="GitHub"
            href="https://github.com/ajitdhdharia"
            target="_blank"
          >
            <GitHubIcon className="social-icons" />
          </a>
          <a title="Mail" href="mailto:dhdhariaajit@gmail.com" target="_blank">
            <MailIcon className="social-icons" />
          </a>
        </div>
        <div className="title-home">
          <h1>Hi, I'm AJIT DHDHARIA</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <div className="cta">
            <a href="#project">VIEW MY WORK</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
