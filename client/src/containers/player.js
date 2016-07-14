import React from 'react';
import YouTube from 'react-youtube';

const Player = props => {
  return (
    <div className='video-main'>
      <YouTube videoId={props.videoId} />
    </div>
  );
};

export default Player;
