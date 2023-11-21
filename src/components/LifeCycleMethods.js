import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle';

 class LifeCycleMethods extends Component {
    constructor() {
        super();
        this.state={
            name:'ravidnar',
        }
        console.log("constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("getderivedmethod");
        return null;
    }
    shouldComponentUpdate (){
        console.log("component did mount parent method")
        return false;
    }
  render() {
    console.log("render method")
    return (
      <div>
        <ChildLifeCycle/>
      </div>
    )
  }
}

export default LifeCycleMethods
