import React from "react";

import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="conatiner home" id="home">
        <div className="row title-home">
          <div className="col">
            <p className="home-intro">Hello, My name is Ajit Dhdharia</p>
            <p className="home-intro-desc">I make websites.</p>
            <p className="home-desc">
              I'm a front-end developer at Veriday Inc. I also write about the
              web on my blog and make travel videos in spare time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
