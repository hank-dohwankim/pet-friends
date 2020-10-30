import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to={'/'}>Pet Friend</Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item>
          <Link to={'/login'}>Login</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={'/register'}>Sign up</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
