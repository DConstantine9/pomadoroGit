import React from 'react';

export default class Session extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    //this.timer = this.timer.bind(this)
  }

  render() {

    if (this.state.min < 0) {
      this.setState({
        min: 0
      })
    }

    if (this.state.min > 60) {
      this.setState({
        min: 60
      })
    }

    if (this.state.sec === -1) {
      this.setState({
        sec: 59,
        min: this.state.min - 1
      }) 
    }

    return (
      <div className="session">
        <div id="session-length">{this.props.session}</div>
        <div id="session-label">Session Length</div>
        <button id="session-increment" onClick={this.props.sessionIncrementor}>+</button>
        <button id="session-decrement" onClick={this.props.sessionDecrementor}>-</button>
      </div> 
    )
  }
}