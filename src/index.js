import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(

  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

