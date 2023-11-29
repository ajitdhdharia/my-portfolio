import React from "react";
import "../styles/card.css";

function Card(props) {
  return (
    <>
      <div className="project-card col-sm-6 col-md-4 p-4">
        <a href={props.codeURL}>
          <div className="card">
            <img className="card-image" src={props.imageURL} alt=""></img>
            <div className="card-body project-card-body">
              <h4 className="card-title">{props.name}</h4>
              <span className="card-text">{props.description}</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
