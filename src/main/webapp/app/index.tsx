import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ErrorBoundary from './shared/error/error-boundary';
import { queryClient } from './shared/utils/query-client';
import { setupIcons } from './config/icons';
import AppComponent from './app';

setupIcons();

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div>
          <Component />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
