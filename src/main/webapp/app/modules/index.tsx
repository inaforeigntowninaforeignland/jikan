import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RouteKey } from 'app/helpers/constants';
import ErrorBoundaryRoute from 'app/shared/error/ErrorBoundaryRoute';

import Top from './top';
import Anime from './anime';

const Routes = ({ match }) => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}${RouteKey.TOP}`} component={Top} />
        <ErrorBoundaryRoute path={`${match.url}${RouteKey.ANIME}`} component={Anime} />;
        <Route path="/">
          <Redirect to={`/${RouteKey.TOP}`} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
