import React from 'react';
import { Button, Fade } from 'reactstrap';

export interface ErrorAlertProps {
  error: Error;
  tryAgain(): void;
  goBack(): void;
}

export const ErrorAlert = ({ error, tryAgain, goBack }: ErrorAlertProps) => {
  return (
    <Fade>
      <div className="alert alert-danger">{`${error} :(`}</div>

      <Button onClick={() => tryAgain()} className="mr-2" color="info">
        Try again
      </Button>

      <Button onClick={() => goBack()} className="mr-2" color="info">
        Go back
      </Button>
    </Fade>
  );
};

export default ErrorAlert;
