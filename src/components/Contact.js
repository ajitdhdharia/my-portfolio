import React, { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import "../styles/contact.css";

const Contact = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const phoneHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const messageHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredEmail("");
    setEnteredName("");
    setEnteredPhone("");
    setEnteredMessage("");
  };

  return (
    <div id="contact">
      <section className="contact-details">
        <div className="contact-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-heading ">
                  <h1 className="primary-heading">Contact</h1>
                  <p className="tertiary-heading">
                    Get in touch with me via social media or email
                  </p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <a
                      className="social-linkedIn"
                      href="https://www.linkedin.com/in/ajitdhdharia/"
                    >
                      <BiLogoLinkedin className="icon"></BiLogoLinkedin>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="social-github"
                      href="https://github.com/ajitdhdharia"
                    >
                      <FaGithub className="icon"></FaGithub>
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="social-instagram"
                      href="https://www.instagram.com/wanderwithajit/"
                    >
                      <FaInstagram className="icon"></FaInstagram>
                      <span>Instagram</span>
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="social-mail"
                      href="https://www.instagram.com/wanderwithajit/"
                    >
                      <BiLogoGmail className="icon"></BiLogoGmail>
                      <span>Gmail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 contact-image">
                <img
                  className=""
                  src="/images/profile_ajit_short.png"
                  alt="profile"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form ">
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="tertiary-heading">
                  Get in touch with me via social media or email
                </p>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-input-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={enteredEmail}
                          onChange={emailHandler}
                          required
                        />
                      </div>
                      <div className="contact-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={enteredName}
                          onChange={nameHandler}
                          required
                        />
                      </div>
                      <div className="contact-input-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          type="tel"
                          id="mobile"
                          value={enteredPhone}
                          onChange={phoneHandler}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-input-group message">
                        <label htmlFor="">Message</label>
                        <input
                          type="text"
                          id="message"
                          value={enteredMessage}
                          onChange={messageHandler}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ textAlign: "end" }}>
                      <button type="submit" className="btn submit-button">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
