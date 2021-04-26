import React from "react";
import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact" id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill="#eeeeee"
          fill-opacity="1"
          d="M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,74.7C840,85,960,107,1080,133.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>{" "}
      <div>
        <h3>Contacts</h3>
        <hr></hr>
        <p>Have a question or want to work together?</p>
        <div className="my-contact">
          <span>+1 514-247-1415 |</span>
          <a href="mailto: dhdhariaajit@gmail.com"> dhdhariaajit@gmail.com</a>
        </div>
      </div>
      <form className="contact-form">
      <div className="form-content">
      <div className="user-details">
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="contactName"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="contactPhone"
            placeholder="Your Mobile"
          />
        </div>
        </div>
        <div className="mb-1">
          <input
            type="text"
            className="form-control message"
            id="contactMessage"
            placeholder="Your Message"
            style={{textAlign: "center"}}
          />
        </div>
        </div>
        <button type="submit" className="btn submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
