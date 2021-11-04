import React from 'react';
import { Fade, Navbar } from 'reactstrap';

import SearchPanel from 'app/modules/search/components/SearchPanel';

const Header = () => {
  return (
    <Fade>
      <Navbar light expand="sm" fixed="top" className="jh-navbar">
        <SearchPanel />
      </Navbar>
    </Fade>
  );
};

export default Header;
