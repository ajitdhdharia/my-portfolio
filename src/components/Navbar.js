import React from "react";

import "../styles/navbar.css";

function NavBar() {
  return (
  <div>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-nav">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto d-inline-flex flex-row">
            <li className="nav-item px-2">
              <a className="nav-link" href="#home">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#about">
              <span>About</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#skills">
              <span>Skills</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#project">
              <span>Projects</span>
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
  </div>
  );
}

export default NavBar;
