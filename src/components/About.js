import React from "react";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faTachometerAlt,
  faShapes,
  faLaptopHouse,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/about.css";

const responsive = (
  <FontAwesomeIcon icon={faMobileAlt} size="5x" color="#00adb5" />
);
const dynamic = <FontAwesomeIcon icon={faShapes} size="5x" color="#00adb5" />;
const quickLearner = (
  <FontAwesomeIcon icon={faTachometerAlt} size="5x" color="#00adb5" />
);
const adaptability = (
  <FontAwesomeIcon icon={faLaptopHouse} size="5x" color="#00adb5" />
);

function About() {
  return (
    <div id="about">
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto d-inline-flex flex-row">
            <li className="nav-item px-2">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* About */}
      <section className="about">
        <div className="container pt-4">
          <div>
            <h3>About</h3>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              {responsive}
              <h5>Responsive</h5>
              <p>My layouts will work on any device, big or small.</p>
            </div>
            <div className="col-md-6 col-lg-3">
              {dynamic}
              <h5>Dynamic</h5>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              {quickLearner}
              <h5>Quick Learner</h5>
              <p>
                With amazing quick-learning skill, I learn new technologies
                fast.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              {adaptability}
              <h5>Adaptability</h5>
              <p>
                With rapid change in the IT world, I'm always on the lookout for
                new tools and ways of doing things.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 ">
              <img src="profile-picture-flip.png" alt="profile"></img>
            </div>
            <div className="col-md-12 col-lg-6 about-me">
              <h4>Who is this guy?</h4>
              <p>
                I am a Software Developer in Mobile application
                Development(Java, Android, Mysql) and Web based development
                (ReactJs, CSS3, HTML5, Bootstrap, NoSql). I am currently looking
                for opportunities in the area of software development in Canada.
                I have serious passion for coding, learning new technologies and
                creating intuitive, dynamic user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
