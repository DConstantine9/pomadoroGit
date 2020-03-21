import React from 'react';
import './App.css';

export default class Session extends React.Component {

  render() {
    return (
      <div className="session">
        <div id="session-label">Session Length</div>
        <div className="content">
          <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.props.sessionDecrementor}>-</button>
          <div id="session-length">{this.props.session}</div>
          <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.props.sessionIncrementor}>+</button>
        </div>
      </div> 
    )
  }
}