import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { } from './Actions'

class Home extends React.Component{
  render() {
    return (
      <div>
        <h1>I am the home page~~</h1>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
  }),{
  }
)(Home)
