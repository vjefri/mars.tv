import React, { Component } from 'react';
import Moment from 'moment';

export default class Clock extends Component {
  constructor (props) {
    super(props);

    var dateObj = this.setTime();

    this.state = {date: dateObj.date, time: dateObj.time};
    setInterval(this.clock.bind(this), 1000);
  }

  setTime () {
    let timestamp = new Date();
    let date = Moment(timestamp).format('ddd M' + '/' + 'D');
    let time = Moment(timestamp).format('h:mm a');
    return {date: date, time: time};
  }

  clock () {
    var dateObj = this.setTime();

    this.setState({ date: dateObj.date, time: dateObj.time });
  }

  render () {
    return (
      <div className='current-time'>
        <p>
          {this.state.date}
        </p>
        <p>
          {this.state.time}
        </p>
      </div>
    );
  }
};
