import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/ErrorBoundaryRoute';

import AnimeDetail from '../anime/components/AnimeDetail';

import AnimeList from './components/AnimeList';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AnimeDetail} />

      <ErrorBoundaryRoute path={match.url} component={AnimeList} />
    </Switch>
  </>
);

export default Routes;
