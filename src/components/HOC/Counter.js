import React from "react";
const UpdatedComponent = (OrginalComponent,incrementNumber)=> {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
              count:0
            }
          }
          incrementCount =()=> {
            this.setState(prevState =>{
              return{count:prevState.count+incrementNumber}
            })
          }    
        render() {
            return <OrginalComponent name = "ravindar" incrementCount = {this.incrementCount} count = {this.state.count}{...this.props}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent