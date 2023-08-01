import React from "react";

//Material UI Icons
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import TransformRoundedIcon from '@mui/icons-material/TransformRounded';

import "../styles/about.css";

const responsive = (
  <DevicesRoundedIcon
    style={{ transform: "scale(3)", color: "#00adb5", marginBottom: "1rem" }}
  />
);
const dynamic = (
  <DynamicFeedRoundedIcon
    style={{ transform: "scale(3)", color: "#00adb5", marginBottom: "1rem" }}
  />
);
const quickLearner = (
  <SpeedRoundedIcon
    style={{ transform: "scale(3)", color: "#00adb5", marginBottom: "1rem" }}
  />
);
const adaptability = (
  <TransformRoundedIcon
    style={{ transform: "scale(3)", color: "#00adb5", marginBottom: "1rem" }}
  />
);

function About() {
  return (
    <>
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
                <p style={{ marginTop: "1rem" }}>
                  I am an application developer located in Canada. I have a
                  serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences.
                </p>
                <p>
                  I have serious passion for coding, learning new technologies
                  and creating intuitive, dynamic user experiences. Interested
                  in the entire frontend spectrum and working on ambitious
                  projects with positive people.
                </p>
                <a href="#contact">Let's make something special.</a>
              </div>
            </div>
            {/* About carousel */}
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <div className="flip-x">
                  <div>{responsive}</div>

                  <h5>Responsive</h5>
                  <p>My layouts will work on any device, big or small.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="flip-x">
                  <div>{dynamic}</div>

                  <h5>Dynamic</h5>
                  <p>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="flip-x">
                  <div>{quickLearner}</div>
                  <h5>Quick Learner</h5>
                  <p>
                    With amazing quick-learning skill, I learn new technologies
                    fast.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="flip-x">
                  <div>{adaptability}</div>
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
    </>
  );
}
export default About;
