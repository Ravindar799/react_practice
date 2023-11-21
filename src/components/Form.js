import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         Topic: 'react'
      }
    }
    handleusername = event=>{
        this.setState ({
            username:event.target.value,
        },console.log(this.state.username));
    }
    handlecomments= (event) =>{
        this.setState({
            comments:event.target.value,
        })
    }
    handleTopic =(event)=>{
        this.setState({
            Topic:event.target.value,
        })
    }
    handlesubmit= (event)=>{
        alert(`${this.state.username}${this.state.comments} ${this.state.Topic} `);
        event.preventDefault();
    }
     
  render() {
    return (
        <form onSubmit={this.handlesubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.usernae} onChange={this.handleusername}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handlecomments}>write some thing</textarea>
            </div>
            <div>
                <lable>topic</lable>
                <select value={this.state.Topic} onChange={this.handleTopic}>
                    <option value='react'>REACT</option>
                    <option value='vue'>VUE</option>
                    <option value = 'angular'>ANGULAR</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form

