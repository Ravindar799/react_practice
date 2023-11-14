import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super() 
        this.state = {
            username : '',
            comments : '',
            topic:'vue'
        }
    }
    handleUsernameChange =  (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleUsercommentChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    handleUsertopicChange = (event) =>
    {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>username</label>
                <input type = 'text' value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleUsercommentChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value = {this.state.topic} onChange= {this.handleUsertopicChange}>
                    <option value="react">react</option>
                    <option value= "angular">angular</option>
                    <option value = "vue">vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      
    )
  }
}

export default Form
