import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/ErrorBoundaryRoute';
import PageNotFound from 'app/shared/error/PageNotFound';

import Modules from 'app/modules';

const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <ErrorBoundaryRoute path="/" component={Modules} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
