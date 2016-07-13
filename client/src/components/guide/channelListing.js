import React from 'react';
import _ from 'lodash';

const category = 'innactive row channel';

const ChannelListing = props => (
  <ul className='listing'>
    {_.map(props.channel, (channel, key) => (
       <li className={category} key={key}>
         <div className='channel-info'>
           <span className='number'>{channel['number']}</span>
           <h4 className='channel-name'>{channel['channelName']}</h4>
         </div>
       </li>
     ))}
  </ul>
);

export default ChannelListing;
