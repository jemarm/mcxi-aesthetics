import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">MCXI Aesthetics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} smooth to="#home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#about">
            About
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#services">
            Services
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
