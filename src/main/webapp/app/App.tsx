import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { Card } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import Header from 'app/shared/layout/header/Header';
import Footer from 'app/shared/layout/footer/Footer';

import ErrorBoundary from 'app/shared/error/ErrorBoundary';

import AppRoutes from 'app/routes';

import './app.scss';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  const paddingTop = '60px';

  return (
    <Router basename={baseHref}>
      <div className="app-container" style={{ paddingTop }}>
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />

        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <div className="container-fluid view-container" id="app-view-container">
          <Card className="jh-card">
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </Card>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default hot(module)(App);
