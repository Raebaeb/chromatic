import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/new'>create palette</Link>
      </nav>
        <Link to='/'><img src='' alt='chromatica logo'></img></Link>
    </header>
  );
};

export default Nav;