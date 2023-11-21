import React, { Component } from 'react'

 class Child extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:null,
        }
        console.log(props," child constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log(props,"inside child getDerivedStateFromProps");
        console.log("getderivedmethod");
        return {
            user:"getDerivedStateFromProps"
        };
    }
    componentDidMount (){
        console.log("component did mount child method")
    }
  render() {
    return (
      <div>
        <h2>{this.state.user}</h2>
      </div>
    )
  }
}

export default Child
