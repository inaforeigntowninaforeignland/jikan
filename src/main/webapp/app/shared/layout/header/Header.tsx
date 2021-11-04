import React from 'react';
import { Fade, Navbar } from 'reactstrap';

const Header = () => {
  return (
    <Fade>
      <Navbar light expand="sm" fixed="top" className="bg-light" />
    </Fade>
  );
};

export default Header;
