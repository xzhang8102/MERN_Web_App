import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <h2>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h2>
      <ul>
        <li>
          <a href="!#">Developers</a>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
