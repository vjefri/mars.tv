import React from 'react';
import _ from 'lodash';

const Episode = props => (
  <ul className='queue'>
    {_.map(props.episode, (episode, key) => (
       <li className='innactive episode' key={key}>
         <span className='inner-timeline'>{episode['title']}</span>
       </li>
     ))}
  </ul>
);

export default Episode;
