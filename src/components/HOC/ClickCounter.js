import React, { Component } from 'react'
import UpdatedComponent  from './Counter'

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>{this.props.name}Clicked{this.props.count}times {this.props.name}</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter,10)
