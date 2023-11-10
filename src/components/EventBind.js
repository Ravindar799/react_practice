import React, { Component } from 'react'

export default class EvnetBind extends Component {
  constructor() {
    super();
    this.state = {
      message:'subscribe'
  }
  // this.update = this.update.bind(this);
  }
  
  update=()=> {
    this.setState({
      message: "thank you for subscribing"
    },console.log("done"));
  }
    render() {
    return (
      <div>
           <h1>{this.state.message}</h1>
        <button onClick={this.update}>click</button>
        {/* <button onClick={()=> this.update()}>click</button> */}
      </div>
    )
  }
}

