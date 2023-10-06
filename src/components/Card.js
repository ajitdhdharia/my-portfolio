import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "../styles/card.css";

function Card(props) {
  return (
    <>
      <motion.div
        className="project-card col-sm-6 col-md-4 col-lg-3"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.25 },
        }}
      >
        <div className="card text-center mb-4 h-100">
          <div className="card-body project-card-body">
            <h5 className="card-title">{props.name}</h5>
            <span className="card-text">{props.description}</span>
            <div className="card-buttons">
              {props.demoURL !== "" ? (
                <a href={props.demoURL} className="btn" target="_blank">
                  Demo
                </a>
              ) : null}
              {props.codeURL !== "" ? (
                <a href={props.codeURL} className="btn" target="_blank">
                  Code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
