import React from "react";
import "../styles/card.css";
function Card(props) {
  return (
    <div className="col col-lg-4 col-sm-12 mb-4">
      <div className="card text-center project-card">
        <div className="card-body project-card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <button href={props.link} className="btn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
