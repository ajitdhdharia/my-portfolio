import React from "react";
import Navbar from "../components/Navbar";

import "../styles/home.css";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <header className="home" id="home">
        <div className="title-home">
          <h1>
            Hi, I'm <span>AJIT DHDHARIA</span>
          </h1>
          <h3>A Front-end Web Developer</h3>
          <a href="#project">View my work</a>
        </div>
      </header>
    </div>
  );
}

export default Home;
