import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parenName: "parent",
    };
    // this.greetParent = this.greetParent.bind(this);
  }
  greetParent = (call) => {
    // alert(`Hello ${this.state.parenName}`);
    alert(`Hello ${this.state.parenName} ${call}`);
  };
  render() {
    return (
      <div>
        <ChildComponent geetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
