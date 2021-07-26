import React, { Component } from "react";

class HoverIncrementComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  hoverHandler = () => {
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
        <h1 onMouseOver={this.hoverHandler}>Hover {count} time</h1>
      </div>
    );
  }
}

export default HoverIncrementComponent;
