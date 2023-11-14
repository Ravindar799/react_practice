import React, { Component } from 'react'
import ChildProps from './ChildProps';

 class Practiceprops extends Component {
  constructor () {
    super() ;
    this.state = {
      count: 1,
      message: "subscribe",
    }
    this.temp = this.temp.bind(this);
  }
  temp() {
    this.setState({
      count: this.state.count+1,
      message:"subscribed",
      
    })
  }
  render() {
    return (
      <div>
        <p>count{this.state.count}</p> 
        <ChildProps temp = {this.temp} temp1 = {this.state.message}/>
      </div>
    )
  }
}

export default Practiceprops



