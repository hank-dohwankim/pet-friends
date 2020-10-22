import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Pet Friend</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Sign up</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
