import React from 'react';
import './App.css';

export default class Break extends React.Component {

  render() {
    return (
      <div className="break">
        <div  id="break-label">Break Length</div>
        <div className="content">
          <button disabled={this.props.isPlay === true ? "disabled" : ""} id="break-decrement" onClick={this.props.breakDecrementor}>-</button>
          <div  id="break-length">{this.props.break}</div>
          <button disabled={this.props.isPlay === true ? "disabled" : ""} id="break-increment" onClick={this.props.breakIncrementor}>+</button>
        </div>
      </div>    
    )
  }
}