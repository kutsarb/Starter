
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Tabs, Tab } from "react-bootstrap";

function Nav2() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div class="container-fluid">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home" />
              <Tab eventKey="profile" title="Profile" />
              <Tab eventKey="contact" title="Contact" />
              <Tab eventKey="blog" title="Blog" />
            </Tabs>
            <Navbar.Brand href="/">Starter Website</Navbar.Brand>
            <Nav.Link href="#0">Home</Nav.Link>
            <Nav.Link href="#1">About</Nav.Link>
            <Nav.Link href="#2">Services</Nav.Link>
            <Nav.Link href="#3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Nav2;