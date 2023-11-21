import React, { Component } from 'react'

 class Listrendering extends Component {
    constructor () {
        super() ;
        this.state = {
            tasks: [
                { id: 1, name: 'Complete assignment' },
                { id: 2, name: 'Read a book' },{
                  id:3,name: 'playing cricket'
                }
              ],
        }
    }
    delete=(key)=>{
        this.setState({
           tasks:this.state.tasks.filter((task,index)=>key!=index)
        })
    }
  render() {
        let task = this.state.tasks.map((temp,index)=>{
            return <>
            <li key={temp.id}>{temp.name}{temp.id}</li>
            <button onClick={()=>{this.delete(index)}}>delete</button>
            </>
        }
        );
        if(this.state.tasks===null) {
            return <h1>your list is empty!</h1>
        }
    return (
        
      <div>
        <ul>{task}</ul>
      </div>
    )
  }
}

export default Listrendering
