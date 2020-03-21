import React from 'react';
import Break from "./break"
import Session from "./session"
import CurrentSession from "./currentSession"

export default class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      break: 1,
      session: 1,
      min: 1,
      isPlay: false
    }
    this.sessionDecrementor = this.sessionDecrementor.bind(this)
    this.sessionIncrementor = this.sessionIncrementor.bind(this)
    this.breakDecrementor = this.breakDecrementor.bind(this)
    this.breakIncrementor = this.breakIncrementor.bind(this)
    this.toggleInterval = this.toggleInterval.bind(this)
    this.playStopTimer = this.playStopTimer.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
    this.reset = this.reset.bind(this) 
  }

  sessionIncrementor() {
    this.setState({
      session: this.state.session + 5,
      min: this.state.session + 5
    })
  }

  sessionDecrementor() {
    this.setState({
      session: this.state.session - 5,
      min: this.state.session - 5
    })
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

  updateTimer() {
    this.setState({
      min: this.state.min - 1
    })
  }

  toggleInterval(isSession) {
    if (isSession) {
      this.setState({
        min: this.state.session
      }) 
    } else {
      this.setState({
        min: this.state.break
      })
    }
  }

  reset() {
    this.setState({
      min: this.state.session
    })
  }

  playStopTimer() {
    this.setState({
      isPlay: !this.state.isPlay
    })
  }

  render() {

    if (this.state.break <= 0) {
      this.setState({
        break: 1
      })
    }

    if (this.state.session < 0) {
      this.setState({
        session: 0
      })
    }

    if (this.state.break > 60) {
      this.setState({
        break: 60
      })
    }

    if (this.state.session > 60) {
      this.setState({
        session: 0
      })
    }

    return (
      <div className="timer">
        <Break isPlay={this.state.isPlay} break={this.state.break} breakDecrementor={this.breakDecrementor} breakIncrementor={this.breakIncrementor}/* timer={this.timer} *//>
        <Session isPlay={this.state.isPlay} session={this.state.session} sessionDecrementor={this.sessionDecrementor} sessionIncrementor={this.sessionIncrementor}/* timer={this.timer} *//>
        <CurrentSession isPlay={this.state.isPlay} playStopTimer={this.playStopTimer} min={this.state.min} break={this.state.break} updateTimer={this.updateTimer} toggleInterval={this.toggleInterval} reset={this.reset} />
        <audio id="end" preload="auto" src="alarm.mp3"></audio>
      </div>
    )
  }
} 
 
