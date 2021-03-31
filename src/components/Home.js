import React from "react";
import BackgroundVideo from "../assets/background-video.mp4";
import "../styles/home.css";

function Home() {
  return (
    <header className="home">
      <h1>AJIT DHDHARIA</h1>
      <h3>An Application Developer</h3>
      <video autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4"></source>
      </video>
    </header>
  );
}

export default Home;
