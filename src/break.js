import React from 'react';

export default class Break extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      sec: 5
    }

  }



  render() {

    if (this.state.min < 0) {
      this.setState({
        min: 0
      })
    }

    if (this.state.min > 60) {
      this.setState({
        break: 60
      })
    }

    if (this.state.sec === -1) {
      this.setState({
        sec: 59,
        min: this.state.min - 1
      }) 
    }

    return (
      <div className="break">
        <div id="break-length">{this.props.break}</div>
        <div id="break-label">Break Length</div>
        <button id="break-increment" onClick={this.props.breakIncrementor}>+</button>
        <button id="break-decrement" onClick={this.props.breakDecrementor}>-</button>
        <button id="start_stop" onClick={this.timer}>start</button>
        <button id="reset" onClick={this.sound}>reset</button>
      </div>    
    )
  }
}