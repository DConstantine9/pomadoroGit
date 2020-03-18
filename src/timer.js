import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      break: 5,
      session: 25,
      sec: 0
    }

    this.breakIncrementor = this.breakIncrementor.bind(this)
    this.breakDecrementor = this.breakDecrementor.bind(this)
    this.sessionIncrementor = this.sessionIncrementor.bind(this)
    this.sessionDecrementor = this.sessionDecrementor.bind(this)
    this.timer = this.timer.bind(this)
   // this.pause = this.pause.bind(this)
  }

  breakIncrementor() {
    this.setState({
      break: this.state.break + 1
    })
  }

  breakDecrementor() {
    this.setState({
      break: this.state.break - 1
    })
  }

  sessionIncrementor() {
    this.setState({
      session: this.state.session + 5
    })
  }

  sessionDecrementor() {
    this.setState({
      session: this.state.session - 5
    })
  }

  timer() {

    
    setInterval(() => {
      this.setState({
        sec: this.state.sec - 1
      })
    }, 1000)
  }
  
 /*  pause() {
    clearInterval(this.timer)
  } */

  render() {
    
    if (this.state.sec == -1) {
      this.setState({
        sec: 59,
        session: this.state.session - 1
      }) 
    }

    if (this.state.break <= 0) {
      this.state.break = 1
    }

    if (this.state.session <= 0) {
      this.state.session = 1
    }

    if (this.state.break > 60) {
      this.state.break = 60
    }

    if (this.state.session > 60) {
      this.state.session = 60
    }

    if (this.state.sec < 10) {
      this.state.sec = `0${this.state.sec}`
    } 


    return (
      <div className="timer">
        <div id="break-length">{this.state.break}</div>
        <div id="break-label">Break Length</div>
        <button id="break-increment" onClick={this.breakIncrementor}>+</button>
        <button id="break-decrement" onClick={this.breakDecrementor}>-</button>
        <div id="session-length">{this.state.session}:{this.state.sec}</div>
        <div id="session-label">Session Length</div>
        <button id="session-increment" onClick={this.sessionIncrementor}>+</button>
        <button id="session-decrement" onClick={this.sessionDecrementor}>-</button>
        <button id="start_stop" onClick={this.timer}>start</button>
        <button id="reset" /*onClick={this.pause}*/>reset</button>
      </div>
    )
  }
}
 
