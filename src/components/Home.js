import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <header className="home" id="home">
      <div className="title-home">
        <h1>
          Hi, I'm <span>Ajit Dhdharia</span>
        </h1>
        <h3>A Front-end Web Developer</h3>
        <a href="#project">View my work</a>
      </div>
    </header>
  );
}

export default Home;
