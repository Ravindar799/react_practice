import React, { Component } from 'react'

 class ChildProps extends Component {
  render() {
    const {temp,temp1} = this.props;
    return (
      <div>
        {console.log(this)}
        <button onClick= {temp}>{temp1}</button>
      </div>
    )
  }
}

export default ChildProps
