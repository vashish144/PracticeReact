import React, { Component } from "react";

class ClickIncrementComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler}>Click {count} time</button>
      </div>
    );
  }
}

export default ClickIncrementComponent;
