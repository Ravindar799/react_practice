import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor( ){
        super() ;
        this.state = {
            isLoggedIn:false
        }
    }
  render() {
    
    return this.state.isLoggedIn && <div>welcome ravidnar</div>

    //ternary operator

    // return (
    //     this.state.isLoggedIn ? 
    //     <div>welcome ravindar</div>:
    //     <div>welcome guest</div>
    // )
    // element variables
    // let message 
    // if(this.state.isLoggedIn) {
    //     message = <div>welcome ravidnar</div>
    // }
    // else{
    //     message = <div> welcome guest</div>
    // }
    // return <div>{message}</div>

    //if/else

    // if(this.state.isLoggedIn) {
    //     return <div>welcome ravindar</div>
    // }
    // else{
    //     return <div>welcome guest</div>
    // }
  }
}

export default UserGreeting
