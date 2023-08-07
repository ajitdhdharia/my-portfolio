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

import "../styles/header.css";
import profile from "../assets/profile.jpg";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar className="header" color="faded" expand="lg" light>
        <NavbarBrand href="/">
          <img src={profile} alt="profile" />
          <span>Ajit</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar className="header-content">
          <Nav navbar>
            <NavItem>
              <NavLink href="/" className="header-items">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/project" className="header-items">project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/skills" className="header-items">skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="header-items">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="header-items">contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
