import React from "react";
import "../styles/card.css";
function Card(props) {
  return (
    <div className="col-12 col-lg-4 col-md-6 col-sm-12 each-project">
      <div className="card text-center project-card">
        <img src={props.img} alt="card" />
        <div className="card-body project-card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
