import React from "react";
import { Link } from 'react-router-dom';
import "../styles/card.css";

function Card(props) {
  return (
    <>
      <div className="project-card col-sm-6 col-md-4 p-4">
        <Link to={`/projectDemo/${props.id}`} target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img className="card-image" src={props.imageURL} alt=""></img>
            <div className="card-body project-card-body">
              <h4 className="card-title">{props.name}</h4>
              <span className="card-text">{props.description}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
