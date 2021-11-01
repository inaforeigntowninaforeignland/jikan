import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import AnimeDetail from '../anime/components/AnimeDetail';

import TopList from './components/TopList';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AnimeDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopList} />
    </Switch>
  </>
);

export default Routes;
