import React from 'react';

export default class Session extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      sec: 5
    }

    this.sessionIncrementor = this.sessionIncrementor.bind(this)
    this.sessionDecrementor = this.sessionDecrementor.bind(this)
  }

  sessionIncrementor() {
    this.setState({
      min: this.state.min + 5
    })
  }

  sessionDecrementor() {
    this.setState({
      min: this.state.min - 5
    })
  }


  render() {

    if (this.state.sec === -1) {
      this.setState({
        sec: 59,
        min: this.state.min - 1
      }) 
    }

    if (this.state.sec < 10) {
      this.state.sec = `0${this.state.sec}`
    } 

    return (
      <div className="session">
        <div id="session-length">{this.state.min}:{this.state.sec}</div>
        <div id="session-label">Session Length</div>
        <button id="session-increment" onClick={this.sessionIncrementor}>+</button>
        <button id="session-decrement" onClick={this.sessionDecrementor}>-</button>
        <button id="start_stop" onClick={this.timer}>start</button>
        <button id="reset" onClick={this.sound}>reset</button>
      </div> 
    )
  }
}