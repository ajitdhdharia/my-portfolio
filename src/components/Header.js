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
  const [collapsed, setCollapsed] = useState();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  // Close sign for menu button
  let menuToggle;
  let menuExpandStyle;
  if (collapsed) {
    menuToggle = <NavbarToggler onClick={toggleNavbar} />;
  } else {
    menuToggle = (
      <NavbarToggler onClick={toggleNavbar}>
        <AiOutlineClose className="" />
      </NavbarToggler>
    );
  }

  return (
    <>
      <Navbar className="header" color="faded" expand="lg" light>
        <NavbarBrand href="/">
          <img src={profile} alt="profile" />
          <span>Ajit</span>
        </NavbarBrand>
        {menuToggle}
        <Collapse isOpen={!collapsed} navbar className="header-content">
          <Nav className="navbar-content">
            <NavItem className="mx-auto">
              <NavLink href="/" className="header-items">
                home
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/project" className="header-items">
                project
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/skills" className="header-items">
                skills
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/about" className="header-items">
                about
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink href="/contact" className="header-items">
                contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
