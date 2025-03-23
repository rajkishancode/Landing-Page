import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import SlackLogo from '../img/Slack_Technologies_Logo.png'; 

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" variant="light" expand="lg">
      <BootstrapNavbar.Brand href="#home">
        <img src={SlackLogo} alt="Slack Logo" width="100" height="30" />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#enterprise">Enterprise</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Nav>
          <Nav.Link href="#sign-in">Sign in</Nav.Link>
          <Button variant="outline-primary" className="me-2">Talk to Sales</Button>
          <Button variant="primary">Try for Free</Button>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;