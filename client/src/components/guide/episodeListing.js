import React from 'react';
import _ from 'lodash';

import Episode from './episode';

const category = 'innactive row channel';

const EpisodeListing = props => (
  <ul className='listing'>
    {_.map(props.channel, (channel, key) => (
       <li className={category} key={key}>
         <Episode updateVideo={props.updateVideo} episode={channel['episodes']} />
       </li>
     ))}
  </ul>
);

export default EpisodeListing;
