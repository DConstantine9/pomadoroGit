import React from 'react';

export default class CurrentSession extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isSession: true,
      sec: 0
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.isSession === true ? "Session" : "Break"}</div>
        <div>{this.props.min}:{this.state.sec === 0 ? "00" : this.state.sec < 10 ? "0" + this.state.sec : this.state.sec}</div>
        <button id="start_stop" onClick={this.timer}>start</button>
        <button id="reset" onClick={this.sound}>reset</button>
      </div>
    )
  }
}