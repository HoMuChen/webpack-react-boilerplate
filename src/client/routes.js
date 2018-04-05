import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './modules/App/Container';
import Home from './modules/Home/Container';

export default () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path='/' component={Home} />
    </div>
  </Router>
)
