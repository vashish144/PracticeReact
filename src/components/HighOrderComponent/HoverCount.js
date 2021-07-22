import React, { Component } from "react";
import UpdatedComponent from "./reusablecod/withCount";
class HoverCount extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>
          {name} hover {count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCount, 10);
