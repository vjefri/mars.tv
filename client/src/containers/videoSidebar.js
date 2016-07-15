import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class VideoSidebar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className='video-sidebar'>
        <div className='card'>
          <div className='surface'>
            <div className='header'>
              <div className='channel-name'>
                {this.props.channel.channelName}
              </div>
            </div>
            <div className='content'>
              <h5 className='episode-title'>{this.props.episode.title}</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

VideoSidebar.PropTypes = {

};

function mapStateToProps (state) {
  return {
    episode: state.main.episode,
    channel: state.main.channel
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoSidebar);
