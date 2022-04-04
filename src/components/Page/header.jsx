import React from 'react';
import s from './style.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './assets/logo.png';

export default function Header() {
  return (
    <div>
      <Navbar expand="lg">
        <Container className="align-items-start">
          <div>
            <Navbar.Brand href="#home ">
              <img src={Logo} />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Find a doctor</Nav.Link>
                <Nav.Link href="#link">Apps</Nav.Link>
                <Nav.Link href="#link">Testimonials</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
