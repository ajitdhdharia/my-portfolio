import React from "react";
import "../styles/card.css";

function Card(props) {
  return (
    <>
      <div className="each-project">
        <div className="card text-center project-card">
          <div className="project-card-body p-2">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text w-100">{props.description}</p>
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
      </div>
    </>
  );
}

export default Card;
