import React from 'react';
import YouTube from 'react-youtube';

const Player = props => {
  return (
    <div className='video-main'>
      <div className='video-player'>
        <YouTube videoId={props.videoId} />
      </div>
    </div>
  );
};

export default Player;
