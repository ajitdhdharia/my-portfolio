import React from "react";
import { motion } from "framer-motion";
import "../styles/bookCard.css";

const BookCard = (props) => {
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
        className="book-card col-6 col-sm-4 col-md-3 p-1"
      >
        <div className="card">
          <img className="card-image" src={props.imageURL} alt=""></img>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
