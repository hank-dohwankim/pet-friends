import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>Logo</h1>
      <ul>
        <li>Pets</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav``;

export default Navbar;
