import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("**************** i am from regular component *************");
    return <div>RegComponent: {this.props.name}</div>;
  }
}
export default RegComp;
