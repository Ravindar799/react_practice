import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props);
      this.inputref = React.createRef();
      this.clickHandler = this.clickHandler.bind(this);
      this.cbRef = null;
      this.setCbRef = (element) => {
        this.cbRef =element;
      }
    }
    componentDidMount (){
        // this.inputref.current.focus();
        if(this.cbRef) {
            this.cbRef.focus();
        }
    }
    clickHandler () {
        // alert(this.inputref.current.value);
        alert(this.cbRef.value);
    }
  render() { 
    return (
      <div>
        <input type='text' ref={this.inputref}/>
        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
