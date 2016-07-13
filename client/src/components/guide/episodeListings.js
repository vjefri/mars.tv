import React from 'react';
import _ from 'lodash';

import EpisodeListing from './episodeListing';

const EpisodeListings = props => (
  <div className={props.right}>
    {_.map(props.categories, (category, key) => (
       <div key={key}>
         <div className='category'></div>
         <EpisodeListing channel={props.data[category]} />
       </div>
     ))}
  </div>
);

export default EpisodeListings;
