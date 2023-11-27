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
              <a href="https://www.linkedin.com/in/ajitdhdharia/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajitdhdharia">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/wanderwithajit/">
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
