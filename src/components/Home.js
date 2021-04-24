import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <header className="home" id="home">
      <div className="title-home">
        <h1>
          Hi, I'm <span>AJIT DHDHARIA</span>
        </h1>
        <h3>A front-end Developer</h3>
        <a href="#project">View my work</a>
      </div>
    </header>
  );
}

export default Home;
