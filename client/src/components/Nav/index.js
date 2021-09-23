import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/new'>create palette</Link>
      </nav>
        <Link to='/' id='logo-link'>
          <img src={logo} id='logo' alt='chromatica logo'/>
        </Link>
    </header>
  );
};

export default Nav;