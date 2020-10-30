import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Pet Friend</Navbar.Brand>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>
          <p>Login</p>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
        <Nav.Link>
          <p>Sign up</p>
        </Nav.Link>
      </LinkContainer>
    </Navbar>
  );
}
