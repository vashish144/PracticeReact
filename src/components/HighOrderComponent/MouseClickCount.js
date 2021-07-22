import React, { Component } from "react";
import UpdatedComponent from "./reusablecod/withCount";
class MouseClickCount extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} click {count} time
        </button>
      </div>
    );
  }
}
export default UpdatedComponent(MouseClickCount, 5);
