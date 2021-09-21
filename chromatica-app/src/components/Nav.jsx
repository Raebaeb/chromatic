import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/new'>create palette</Link>
      </nav>
        <Link to='/'>Home</Link>
    </header>
  );
};

export default Nav;