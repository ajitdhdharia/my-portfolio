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
      {/* About */}
      <section className="about">
        <div className="container pt-4 pb-4">
          <div>
            <h3>ABOUT</h3>
            <hr></hr>
          </div>
          <div className="row about-top">
            <div className="col-md-12 col-lg-6">
              <img src="profile-picture-flip.png" alt="profile"></img>
            </div>
            <div className="col-md-12 col-lg-6 about-me">
              <h4>Who is this guy?</h4>
              <p>
                I am a front-end application developer located in Canada. I am
                proficient in front-end development for web based and mobile
                based applications.
              </p>
              <p>
                I have serious passion for coding, learning new technologies and
                creating intuitive, dynamic user experiences. Interested in the
                entire frontend spectrum and working on ambitious projects with
                positive people.
              </p>
              <a href="#contact">Let's make something special.</a>
            </div>
          </div>
          {/* About carousel */}
          <div className="row">
            <div className="col-md-6 col-lg-3 ">
              <div className="flip-x">
                {responsive}
                <h5>Responsive</h5>
                <p>My layouts will work on any device, big or small.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="flip-x">
              {dynamic}
              <h5>Dynamic</h5>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
              </div>  
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="flip-x">
              {quickLearner}
              <h5>Quick Learner</h5>
              <p>
                With amazing quick-learning skill, I learn new technologies
                fast.
              </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="flip-x">
              {adaptability}
              <h5>Adaptability</h5>
              <p>
                I'm always on the lookout for new tools and ways of doing
                things.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
