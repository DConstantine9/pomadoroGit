import React from 'react';
import Break from "./break"
import Session from "./session"
import CurrentSession from "./currentSession"

export default class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      break: 5,
      session: 25,
      min: 25
    }

    //this.timer = this.timer.bind(this)
    // this.pause = this.pause.bind(this)
    this.sessionDecrementor = this.sessionDecrementor.bind(this)
    this.sessionIncrementor = this.sessionIncrementor.bind(this)
    this.breakDecrementor = this.breakDecrementor.bind(this)
    this.breakIncrementor = this.breakIncrementor.bind(this)
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

  /* timer() {
    this.interval = setInterval(() => {
      this.setState({
        sec: this.state.sec - 1
      })
    }, 1000)

    if(this.state.min === 0 && this.state.sec === 0) {
      clearInterval(this.interval)
    }
  } */
    
 /*  pause() {

  } */
 

  render() {

    if (this.state.break < 0) {
      this.setState({
        break: 0
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
        <Break  break={this.state.break} breakDecrementor={this.breakDecrementor} breakIncrementor={this.breakIncrementor}/* timer={this.timer} *//>
        <Session session={this.state.session} sessionDecrementor={this.sessionDecrementor} sessionIncrementor={this.sessionIncrementor}/* timer={this.timer} *//>
        <CurrentSession min={this.state.min}/>
        <audio id="end" preload="auto" src="alarm.mp3"></audio>
      </div>
    )
  }

 /*  componentDidMount() {
    if (this.state.session === 0 && this.state.sec === 0) {
      this.interval = setInterval(() => {
        this.setState({
          sec: this.state.sec - 1
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }*/
} 
 
