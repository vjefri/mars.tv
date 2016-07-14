import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Player from '../components/player';
import Guide from './guide';
import VideoSidebar from './videoSidebar';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app'>
        <Player videoId={this.props.videoId} />
        <Guide />
        <VideoSidebar />
      </div>
    );
  }
};

App.PropTypes = {

};

function mapStateToProps (state) {
  return {
    videoId: state.player.videoId
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
