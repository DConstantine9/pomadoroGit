import React from 'react';
import Break from "./break"
import Session from "./session"

export default class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }

    this.timer = this.timer.bind(this)
    this.sound = this.sound.bind(this)
   // this.pause = this.pause.bind(this)
  }

  sound() {
    let audio = new Audio()
    audio.src = "/alarm-clock-beep-1_zjgin-vd.mp3"
    audio.autoplay = true
  }

  timer() {
    //this.interval
  }
    
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

    /* if (this.state.session === 0 && this.state.sec === 0) {
      this.sound()
    } */

    return (
      <div className="timer">
        <Break />
        <Session />
      </div>
    )
  }

  componentDidMount() {
    if (this.state.session === 0 && this.state.sec === 0) {
      this.interval = setInterval(() => {
        this.setState({
          sec: this.state.sec - 1
        })
      }, 1000)
      this.sound()
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}
 
