import React from 'react';
import YouTube from 'react-youtube';

const Player = props => {
  return (
    <section className='video-main'>
      <div className='video-player'>
        <YouTube videoId={props.videoId} />
      </div>
    </section>
  );
};

export default Player;
