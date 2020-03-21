import React from 'react';
import './App.css';

export default class Break extends React.Component {

  render() {

    /* if (this.state.min <= 1) {
      this.setState({
        min: 1
      })
    }

    if (this.state.min > 60) {
      this.setState({
        break: 60
      })
    }*/

    return (
      <div className="break">
        <div  id="break-label">Break Length</div>
        <div  id="break-length">{this.props.break}</div>
        <button disabled={this.props.isPlay === true ? "disabled" : ""} id="break-increment" onClick={this.props.breakIncrementor}>+</button>
        <button disabled={this.props.isPlay === true ? "disabled" : ""} id="break-decrement" onClick={this.props.breakDecrementor}>-</button>
      </div>    
    )
  }
}