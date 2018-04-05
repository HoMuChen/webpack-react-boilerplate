import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { } from './Actions'

class App extends React.Component{
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/a">a</Link>
        <Link to="/b">b</Link>
        <Link to="/test">test</Link>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
  }),{
  }
)(App)
