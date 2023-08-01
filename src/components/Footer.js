import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/footer.css";
function Footer() {
  return (
    <>
      <div className="footer-items">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/ajitdhdharia/" target="_blank">
            <LinkedInIcon
              style={{
                width: "50px",
                height: "50px",
                color: "#00adb5",
                marginRight: "1rem",
              }}
            />
          </a>
          <a href="https://github.com/ajitdhdharia" target="_blank">
            <GitHubIcon
              style={{
                width: "45px",
                height: "45px",
                color: "#00adb5",
                marginLeft: "1rem",
              }}
            />
          </a>
        </div>
        <div className="footer-copyright">
          Ajit Dhdharia <span>©2021</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
