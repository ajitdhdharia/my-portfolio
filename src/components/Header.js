import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { AiOutlineClose } from "react-icons/ai";

import "../styles/header.css";
import profile from "../assets/profile.jpg";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true); //initial state true to keep it close for smaller screens.

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  // Close sign for menu button
  let menuToggle;
  if (collapsed) {
    menuToggle = <NavbarToggler onClick={toggleNavbar} />;
  } else {
    menuToggle = (
      <NavbarToggler onClick={toggleNavbar}>
        <AiOutlineClose className="close" />
      </NavbarToggler>
    );
  }

  return (
    <section id="header">
      <Navbar className="container header" color="faded" expand="lg" light>
        <NavbarBrand href="/">
          <img src={profile} alt="profile" />
          <span className="title">Ajit</span>
        </NavbarBrand>
        {menuToggle}
        <Collapse isOpen={!collapsed} navbar className="header-content">
          <Nav className="navbar-content">
            <NavItem className="mx-auto">
              <NavLink href="/my-portfolio" className="header-items">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/my-portfolio/project" className="header-items">
                Project
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/skills" className="header-items">
                Skills
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/my-portfolio/about" className="header-items">
                About
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/my-portfolio/contact" className="header-items">
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
