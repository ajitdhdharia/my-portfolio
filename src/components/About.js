import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import BookCard from "./BookCard";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about">
      <section id="about-intro">
        <div className="container">
          <div className="row about-intro-text">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0, opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="col-lg-6"
            >
              <h2 className="secondary-heading">
                Making the web a better place - one line of Javascript at a time
              </h2>
              <p className="heading-desc">
                I'm Ajit, a software developer from Toronot, Canada. I've been
                programming for quite a few years now, but I honestly didn't
                love it at first. During my studies at the Army Institute of
                Technology I got introduced to lots of different coding topics,
                but it never really clicked for me.
              </p>
              <p className="heading-desc">
                It wasn't until the end of 2016 when I decided to google "how to
                make a website" that coding really started to make sense. I
                began with the classic HTML and CSS, building small (and ugly)
                websites for myself, and since then I've been working hard to
                level up my development skills to where I am today - even though
                I still have plenty of stuff to learn.
              </p>
              <p className="heading-desc">
                In the last few years I've been diving deep into the modern
                JavaScript world: exploring the latest frameworks, libraries and
                tools, and learning how to build fast, accessible and scalable
                web applications. For now my go-to stack is MERN, but I'm always
                keeping an eye on the ecosystem for what comes next. I've also
                really been enjoying the creative side of front-end, using
                libraries like Framer Motion and gsap to build beautiful and
                interactive user interfaces.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0, opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="col-lg-6"
            >
              <div className="about-image">
                <img src="/images/ajit_professional.jpg" alt="profile"></img>
              </div>
              <div className="about-social-icons">
                <a
                  className="social-linkedIn"
                  href="https://www.linkedin.com/in/ajitdhdharia/"
                >
                  <FaLinkedin className="icon"></FaLinkedin>
                  <span>Follow on LinkedIn</span>
                </a>

                <a
                  className="social-github"
                  href="https://github.com/ajitdhdharia"
                >
                  <FaGithub className="icon"></FaGithub>
                  <span>Follow on GitHub</span>
                </a>
                <a
                  className="social-mail"
                  href="https://www.instagram.com/wanderwithajit/"
                >
                  <BiLogoGmail className="icon"></BiLogoGmail>
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="books">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h2 className="secondary-heading">Books I love...</h2>
            </div>
          </div>
          <div className="row books-cards">
            <BookCard imageURL="/images/BooksImages/clean_code.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/pragmatic.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/refactoring.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/Atomic_habits.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/psychology_of_money.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/steal_like_an _artist.png"></BookCard>
            <BookCard imageURL="/images/BooksImages/Ikigai.png"></BookCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
