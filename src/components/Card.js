import React from "react";
import "../styles/card.css";

function Card(props) {
  return (
    <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-1 each-project">
        <div className="card-overlay m-1"></div>
        <div
          style={{
            backgroundImage: `url(${props.imageURL})`,
            borderRadius: "10px",
            backgroundSize: "cover",
          }}
        >
          <div className="card text-center project-card">
            <div className="project-card-body p-2">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text w-100">{props.description}</p>
              <div className="card-buttons">
                <a href={props.link} className="btn">
                  Demo
                </a>
                <a href={props.link} className="btn">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
