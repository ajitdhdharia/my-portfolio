import React from "react";

//Material UI Icons
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';

// STYLESHEET
import "../styles/skills.css";

const frontEnd = <DevicesRoundedIcon style={{transform: "scale(3)", color: "#00adb5"}}/>
const backEnd = <StorageRoundedIcon style={{transform: "scale(3)", color: "#00adb5"}}/>
const design = <ColorLensOutlinedIcon style={{transform: "scale(3)", color: "#00adb5"}}/>


function Skills() {
  return (
    <div id="skills">
      <section className="conatiner">
        <div className="skills-back-block">
          <h3>SKILLS</h3>
          <hr></hr>
        </div>
        <div className="skill-card">
        <div className="skills-card-group">
          <div className="card-group">
            <div className="card">
              <div className="mt-5 pt-3 mb-4">{frontEnd}</div>
              <div className="card-body">
                <h5 className="card-title">Front-end Developer</h5>
                <p className="card-text">
                I like to strike a balance between functional and aesthetic design, and ensuring web design is optimized for smartphones.
                </p>
                <h6>
                Things I know
                </h6>
                <p className="card-text">
                <strong>Javascript, JAVA, HTML, CSS, Sass, XML, Reactjs, jQuery, React-Bootstrap, Bootstrap 4</strong>
                </p>
                <h6>
                Tools
                </h6>
                <p className="tools">
                <span>Visual Studio Code</span>
                <span>Atom</span>
                <span>Sublime</span>
                <span>Atom</span>
                <span>Android Studio</span>
                <span>IntelliJ</span>
                <span>Agile methodology-SCRUM</span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="mt-5 pt-3 mb-4">{backEnd}</div>
              <div className="card-body">
                <h5 className="card-title">Back-end Developer</h5>
                <p className="card-text">
                Having a good UI is essential for an application but quality of backend is what makes it perfect.
                </p>
                <h6>
                Things I know:
                </h6>
                <p className="card-text">
                <strong>NodeJs, ExpressJs, MySQL, Firebase, MongoDB, SqLite, JSON, NPM, JAVA, Google Map API.</strong>
                </p>
                <h6>
                Tools
                </h6>
                <p className="tools">
                <span>Visual Studio Code</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Terminal</span>
                <span>Netlify</span>
                <span>Mailchimp</span>
                <span>Agile methodology-SCRUM</span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="mt-5 pt-3 mb-4">{design}</div>
              <div className="card-body">
                <h5 className="card-title">Designer + Others</h5>
                <p className="card-text">
                I love to design web/mobile vector graphics, Motion graphics and edit videos.
                </p>
                <h6>
                Things I know
                </h6>
                <p className="card-text">
                <strong>UI, UML, Video editing, Vector graphics, Motion graphics.</strong>
                </p>
                <h6>
                Tools
                </h6>
                <p className="tools">
                <span>Adobe XD</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>Adobe Premiere pro</span>
                <span>Final Cut Pro X</span>
                <span>After Effects</span>
                <span>Slack</span>
                <span>Notion</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
