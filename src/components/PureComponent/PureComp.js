import React, { Component } from "react";

class PureComp extends Component {
  render() {
    console.log(
      "*******************i am form PureComp class***********************"
    );
    return <div>pureComponent: {this.props.name}</div>;
  }
}
export default PureComp;
