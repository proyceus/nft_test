import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";


import App from './App';

const appHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={appHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);