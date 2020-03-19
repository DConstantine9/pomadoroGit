import React from 'react';

export default class Break extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      sec: 5
    }

    this.breakIncrementor = this.breakIncrementor.bind(this)
    this.breakDecrementor = this.breakDecrementor.bind(this)
  }


  breakIncrementor() {
    this.setState({
      min: this.state.min + 1
    })
  }

  breakDecrementor() {
    this.setState({
      min: this.state.min - 1
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
      <div className="break">
        <div id="break-length">{this.state.min}:{this.state.sec}</div>
        <div id="break-label">Break Length</div>
        <button id="break-increment" onClick={this.breakIncrementor}>+</button>
        <button id="break-decrement" onClick={this.breakDecrementor}>-</button>
        <button id="start_stop" onClick={this.timer}>start</button>
        <button id="reset" onClick={this.sound}>reset</button>
      </div>    
    )
  }
}