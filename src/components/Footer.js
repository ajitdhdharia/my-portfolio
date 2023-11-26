import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row footer-items">
            <div className="col-6 footer-copyright">
              <span>©{year}</span>
              <span>Ajit Dhdharia </span>
            </div>
            <div className="col -6 footer-social">
              <a
                href="https://www.linkedin.com/in/ajitdhdharia/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajitdhdharia" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/wanderwithajit/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
