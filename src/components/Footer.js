import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container footer-items">
        <div className="row">
          <div className="col">
            <div className="footer-copyright">
              <span>©{year}</span>
              <span>Ajit Dhdharia </span>
            </div>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/ajitdhdharia/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajitdhdharia" target="_blank">
                <FaGithub />
              </a>
              <a href="https://github.com/ajitdhdharia" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
