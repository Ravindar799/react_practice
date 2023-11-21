
import React, { Component, PureComponent } from 'react'
import Child from './child';

 class Parent extends PureComponent {
    constructor() {
        super();
        this.state={
            name:'ravindar',
        }
        console.log(" parent constructor");
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    // shouldComponentUpdate (){
    //     console.log(" parent shouldComponentUpdate");
    //     return true;
    // }
    componentDidMount() {
        console.log(" parent componentDidMount")
    }
    handleOnClick () {
        this.setState({
            name:'rahul',
        })
    }
  render() {
    console.log(" parent render method")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleOnClick}>click</button>
        <Child userName = {this.state.name}/>
      </div>
    )
  }
}

export default Parent
