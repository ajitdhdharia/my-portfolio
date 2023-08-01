import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="container-xxl home" id="home">
        <div className="title-home">
          <h1>Hi, I'm AJIT DHDHARIA</h1>
          <p>
            A Frontend focused Web Developer building the Applications that leads to the success of the overall
            product. I also write about the web on my blog.
          </p>
          <div className="cta">
            <a href="#project">VIEW MY WORK</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
