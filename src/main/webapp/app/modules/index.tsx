import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Top from './top';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={`${match.url}top`} component={Top} />
      <Route path="/">
        <Redirect to="/top" />
      </Route>
    </Switch>
  </>
);

export default Routes;
