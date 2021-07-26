import React, { Component } from "react";

class HoverIncrementComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover {count} time</h1>
      </div>
    );
  }
}

export default HoverIncrementComponent;
