import React, { Component } from 'react'

class DiscountPercentage extends Component {
  render() {
    const {temp} = this.props;

    return temp>20?<h1>"big sale!"</h1>:(temp<=20 && temp>=10)?<h1>Sale</h1>:temp<10?<h1>"Limited Time Offer"</h1>:<h1></h1>
  }
}

export default DiscountPercentage
