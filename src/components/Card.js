import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/card.css";

function Card(props) {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          offscreen: {
            scale: 0,
            opacity: 0,
          },
          onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              ease: "easeInOut",
              bounce: 0.2,
              duration: 1.2,
            },
          },
        }}
        className="project-card col-sm-6 col-md-4 p-4"
      >
        <Link
          to={`/projectDemo/${props.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <img className="card-image" src={props.imageURL} alt=""></img>
            <div className="card-body project-card-body">
              <h4 className="card-title">{props.name}</h4>
              <span className="card-text">{props.description}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}

export default Card;
