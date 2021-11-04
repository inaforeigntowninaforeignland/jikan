import React from 'react';
import { Alert, Fade } from 'reactstrap';

class PageNotFound extends React.Component {
  render() {
    return (
      <Fade>
        <Alert color="danger">The page does not exist.</Alert>
      </Fade>
    );
  }
}

export default PageNotFound;
