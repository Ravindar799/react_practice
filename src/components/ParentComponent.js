import React, { Component } from 'react'
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "parent"
        }
        this.greetparent = this.greetparent.bind(this)
    }
    greetparent(props) {
        alert(`hello ${this.state.parentName} from ${props}`);
    }
  render() {
    return (
      <div>
            <ChildComponent greetHandler = {this.greetparent}/>
      </div>
    )
  }
}
export default  ParentComponent
