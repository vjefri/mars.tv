import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Clock from '../components/guide/clock';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='mars-guide'>
        <div className='guide-pane'>
          <div className='guide-header'>
            <div className='timeline'>
              <div className='left'>
                <Clock />
              </div>
              <div className='right'></div>
            </div>
            <div className='last-watched'></div>
          </div>
          <div className='guide-scroller'>
            <div className='guide-viewport'>
              <div className='left'></div>
              <div className='right'></div>
              <div className='footer'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

App.PropTypes = {

};

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
