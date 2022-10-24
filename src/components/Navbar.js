import React from "react";
import logo from "../assets/background.jpg";

import "../styles/navbar.css";

function NavBar() {
  return (
    <>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark portfolio-nav">
        <a class="navbar-brand" href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
        <div className="container-fluid d-inline-flex justiy-content-end">
          <ul className="navbar-nav">
            {/* <li className="nav-item px-2">
              <a className="nav-link" href="#home">
                <span>Home</span>
              </a>
            </li> */}
            <li className="nav-item px-2">
              <a className="nav-link" href="#project">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#skills">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#about">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
