
import React from "react";
import "../styles/card.css";

function Card(props) {

  // const [state, setstate] = useState(0);
  // function changeIndex(zIndex) {
  //   setstate(zIndex);
  // }

  return (
    <div className="col-12 col-lg-4 col-md-6 col-sm-12  p-1 each-project">
    <div style={{backgroundImage: `url(${props.imageURL})`, borderRadius: "10px"}}>
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



{/* <img
          onMouseOver={() => changeIndex(1)}
          src={props.imageURL}
          alt="card"
          style={{ zIndex: state}}
        /> */}
        {/* card-img-overlay  */}