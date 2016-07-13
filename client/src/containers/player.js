import React, { Component, PropTypes } from 'react';
import YouTube from 'react-youtube';

const videoIdA = 'XxVg_s8xAms';
const videoIdB = '-DX3vJiqxm4';

export class Player extends Component {

  constructor (props) {
    super(props);

    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);

    this.state = {
      videoId: videoIdA,
      player: null,
      opts: {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1
        }
      }
    };
  }

  onReady (event) {
    this.setState({
      player: event.target
    });
  }

  onPlayVideo () {
    this.state.player.playVideo();
  }

  onPauseVideo () {
    this.state.player.pauseVideo();
  }

  onChangeVideo () {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA
    });
  }
  render () {
    return (
      <div className='video-main'>
        <YouTube videoId={this.state.videoId} opts={this.state.opts} onReady={this.onReady} />
      </div>
    );
  }
};
