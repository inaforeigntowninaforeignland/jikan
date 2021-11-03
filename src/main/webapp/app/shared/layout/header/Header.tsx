import React from 'react';
import { Navbar } from 'reactstrap';

const Header = () => {
  return (
    <div id="app-header">
      <Navbar data-cy="navbar" light expand="sm" fixed="top" className="bg-light" />
    </div>
  );
};

export default Header;
