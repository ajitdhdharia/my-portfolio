import React from "react";
import "../styles/contact.css";
function Contact() {
  return (
      <div className="contact" id="contact">
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
          <div claclassName="mb-2">
            <input
              type="text"
              className="form-control message"
              id="contactMessage"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn submit-button">
            Submit
          </button>
        </form>
      </div>
  );
}

export default Contact;
