import React, { Component } from "react";

class ClickIncrementComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} time</button>
      </div>
    );
  }
}

export default ClickIncrementComponent;
