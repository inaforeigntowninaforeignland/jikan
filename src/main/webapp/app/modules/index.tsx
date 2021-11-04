import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/ErrorBoundaryRoute';

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
