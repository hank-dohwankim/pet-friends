import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import styled from 'styled-components';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      {/* <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li> */}
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
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
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </Nav>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const Nav = styled.nav``;

export default connect(mapStateToProps, { logout })(Navbar);
