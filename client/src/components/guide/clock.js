import React, { Component } from 'react';
// import _ from 'lodash'
import Moment from 'moment';

export default class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      timestamp: Date.now()
    };
    this.tick = this.tick.bind(this);
  }

  tick () {
    this.setState({
      timestamp: this.state.timestamp + 1
    });
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  render () {
    const date = Moment(this.state.timestamp).format('ddd M' + '/' + 'D').toString();
    const time = Moment(this.state.timestamp).format('h:mm:ss a').toString();
    return (
      <div className='clock'>
        <span className='range'>{date}</span>
        {time}
      </div>
    );
  }
};
