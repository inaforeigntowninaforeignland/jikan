import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/ErrorBoundaryRoute';

import Top from './top';
import Anime from './anime';

const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}top`} component={Top} />
        <ErrorBoundaryRoute path={`${match.url}anime`} component={Anime} />;
        <Route path="/">
          <Redirect to="/top" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
