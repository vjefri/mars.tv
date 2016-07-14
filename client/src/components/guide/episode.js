import React from 'react';
import _ from 'lodash';

const Episode = props => {
  function onClick (episode) {
    props.updateVideo(episode['videoId']);
  }

  return (
    <ul className='queue'>
      {_.map(props.episode, (episode, key) => (
         <li className='innactive episode' key={key} onClick={onClick.bind(null, episode)}>
           <span className='inner-timeline'>{episode['title']}</span>
         </li>
       ))}
    </ul>
  );
};

export default Episode;
