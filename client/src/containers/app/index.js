import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.array
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps,  mapDispatchToProps)(App);
