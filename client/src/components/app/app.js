import React, { Component, PropTypes } from 'react';

const App = props => (
  <h1>Hello, {props.name || 'World'}!</h1>
);

export default App;
