import React, { Component } from 'react'
import UpdatedComponent from './Counter'

 class HoverCounter extends Component {
 
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,20)
