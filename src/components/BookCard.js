import React from "react";
import "../styles/bookCard.css";

const BookCard = (props) => {
  return (
    <>
      <div className="book-card col-6 col-sm-4 col-md-3 p-1">
        <div className="card">
          <img className="card-image" src={props.imageURL} alt=""></img>
          <div className="card-body project-card-body">
            <h4 className="card-title">{props.name}</h4>
            <span className="card-text">{props.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
