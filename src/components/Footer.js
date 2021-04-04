import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer-items">
      <div className="footer-social">
        <LinkedInIcon style={{width: "50px", height:"50px", color: "#00adb5", marginRight: "1rem" }}/>
        <GitHubIcon style={{width: "45px", height:"45px", color: "#00adb5", marginLeft: "1rem" }}/>
      </div>
      <div className="footer-copyright">
        Handcrafted by me - Ajit Dhdharia <span>©2021</span>
      </div>
    </div>
  );
}

export default Footer;
