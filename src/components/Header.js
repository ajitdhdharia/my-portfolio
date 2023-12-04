import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import "../styles/header.css";
import profile from "../assets/profile.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //initial state true to keep it close for smaller screens.

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="header">
      <Navbar className="container header" color="faded" expand="lg" light>
        <NavbarBrand href="/">
          <img src={profile} alt="profile" />
          <span className="title">Ajit</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}>
          {isOpen ? (
            <MdClose className="close" style={{ color: "#ffff" }} />
          ) : (
            <AiOutlineMenu className="menu-button" style={{ color: "#ffff" }} />
          )}
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="header-content">
          <Nav className="navbar-content">
            <NavItem className="mx-auto">
              <NavLink href="/" className="header-items">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/project" className="header-items">
                Project
              </NavLink>
            </NavItem>
            {/* <NavItem className="mx-auto">
              <NavLink href="/skills" className="header-items">
                Skills
              </NavLink>
            </NavItem> */}
            <NavItem className="mx-auto">
              <NavLink href="/about" className="header-items">
                About
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/contact" className="header-items">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
