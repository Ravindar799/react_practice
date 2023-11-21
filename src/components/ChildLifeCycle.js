import React, { Component } from 'react'

 class ChildLifeCycle extends Component {
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
    componentDidMount (){
        console.log("component did mount child method")
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ChildLifeCycle
