import React from 'react';
import './App.css';

export default class Session extends React.Component {

  render() {

    /* if (this.state.min < 0) {
      this.setState({
        min: 0
      })
    }

    if (this.state.min > 60) {
      this.setState({
        min: 60
      })
    }*/

    return (
      <div className="session">
        <div id="session-label">Session Length</div>
        <div id="session-length">{this.props.session}</div>
        <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.props.sessionIncrementor}>+</button>
        <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.props.sessionDecrementor}>-</button>
      </div> 
    )
  }
}