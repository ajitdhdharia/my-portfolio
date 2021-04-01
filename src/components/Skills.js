import React from "react";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

// STYLESHEET
import "../styles/skills.css";

const frontEnd = (
  <FontAwesomeIcon icon={faLaptopCode} size="4x" color="#00adb5" />
);
const backEnd = <FontAwesomeIcon icon={faServer} size="4x" color="#00adb5" />;
const design = <FontAwesomeIcon icon={faPalette} size="4x" color="#00adb5" />;

function Skills() {
  return (
    <div id="skills">
      <section className="conatiner pt-4 pb-4">
        <div className="skills-back-block">
          <h3>Skills</h3>
        </div>
        <div className="skills-card-group pl-5 pr-5">
          <div className="card-group">
            <div className="card">
              <div className="mt-4">{frontEnd}</div>
              <div className="card-body">
                <h5 className="card-title">Front-end Developer</h5>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="tools">
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <div className="mt-4">{backEnd}</div>
              <div className="card-body">
                <h5 className="card-title">Back-end Developer</h5>
                <p className="card-text">
                Having a good UI is essential for an application but quality of backend is what makes it perfect.
                </p>
                <h6>
                Things I know:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="tools">
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <div className="mt-4">{design}</div>
              <div className="card-body">
                <h5 className="card-title">Designer + Others</h5>
                <p className="card-text">
                I love to design web/mobile graphics, logos, edit videos and other resources.
                </p>
                <h6>
                Things I know:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="card-text">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.
                </p>
                <h6>
                Languages I speak:
                </h6>
                <p className="tools">
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                <span>Android Studio</span>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
