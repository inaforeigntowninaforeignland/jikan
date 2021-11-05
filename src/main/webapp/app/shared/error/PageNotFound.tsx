import React from 'react';
import { Alert, Fade } from 'reactstrap';

export const PageNotFound = () => {
  return (
    <Fade>
      <Alert color="danger">The page does not exist.</Alert>
    </Fade>
  );
};

export default PageNotFound;
