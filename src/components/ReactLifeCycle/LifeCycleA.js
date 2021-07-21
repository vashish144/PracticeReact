import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("LifecycleA constructor");
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }
  stateHandler = () => {
    this.setState({
      name: "nursary",
    });
  };
  render() {
    console.log("LifecycleA renderMethod");
    return (
      <div>
        LifeCycleA
        <div>
          <button onClick={this.stateHandler}>state change</button>
        </div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
