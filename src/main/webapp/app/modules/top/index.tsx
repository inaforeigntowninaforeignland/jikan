import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Top from './top';
import TopDetail from './top-detail';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopDetail} />
      <ErrorBoundaryRoute path={match.url} component={Top} />
    </Switch>
  </>
);

export default Routes;
