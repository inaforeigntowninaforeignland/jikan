import React from 'react';
import { Fade, Input, InputGroup, InputGroupText, Navbar } from 'reactstrap';

const Header = () => {
  return (
    <Fade>
      <Navbar light expand="sm" fixed="top" className="jh-navbar">
        <InputGroup>
          <Input />

          <InputGroupText>Search</InputGroupText>
        </InputGroup>
      </Navbar>
    </Fade>
  );
};

export default Header;
