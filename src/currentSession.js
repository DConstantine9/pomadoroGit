import React from 'react';

export default class CurrentSession extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isSession: true,
      sec: 0,
      intervalId: 0,
    }

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.resetTimer = this.resetTimer.bind(this) 
  }

  start() {
    let intervalId = setInterval(() => {
      if (this.state.sec === 0) {
        if (this.props.min === 0) {
          if(this.state.isSession) {
            this.setState({
              isSession: false
            })
            this.props.toggleInterval(this.state.isSession)
            document.getElementById("audio").play()
          } else {
            this.setState({
              isSession: true
            })
            this.props.toggleInterval(this.state.isSession)
            document.getElementById("audio").play()
          }
        } else {
          this.props.updateTimer()
          this.setState({
            sec: 59
          })
        }
        
      } else {
        this.setState({
          sec: this.state.sec - 1
        })
      }
    }, 1000)

    this.props.playStopTimer(true)

    this.setState({
      intervalId: intervalId
    })
  }

  stop() {
    clearInterval(this.state.intervalId)
    this.props.playStopTimer(false)
  }

  resetTimer() {
    this.stop()
    this.props.reset()
    this.props.playStopTimer(false)
    this.setState({
      sec: 0,
      isSession: true
    })
  }

  render() {
    return (
      <div className="currentSession">
        <div>{this.state.isSession === true ? "Session" : "Break"}</div>
        <div>{this.props.min}:{this.state.sec === 0 ? "00" : this.state.sec < 10 ? "0" + this.state.sec : this.state.sec}</div>
        <div className="content">
          <button id="start" onClick={this.start} disabled={this.props.isPlay === true ? "disabled" : ""}>start</button>
          <button id="stop" onClick={this.stop}>stop</button>
          <button id="reset" onClick={this.resetTimer}>reset</button>
        </div>
        <audio id="audio" crossOrigin="anonymous" preload="auto" src="media/alarm.mp3"></audio>
      </div>
    )
  }
}