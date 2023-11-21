import React, { Component } from 'react'
import { UserConsumer } from './Context'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                (name) => {
                    return <div>hello{name}</div>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC
