import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment () {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prevState) =>({
        count:prevState.count+1
    }))
    console.log(this.state.count);
  }
  incrementfive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        count - {this.state.count} 
        <button onClick={() => this.incrementfive()}>click</button>
      </div>
    );
  }
}

export default Counter;
