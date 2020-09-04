import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <ul>
        <li>
          <Link to="/pet">Pets</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav``;

export default Navbar;
