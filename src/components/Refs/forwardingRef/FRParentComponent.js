import React, { Component } from "react";
import FRChildComponent from "./FRChildComponent";

class FRParentComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  forwardRefHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRChildComponent ref={this.inputRef} />
        <button onClick={this.forwardRefHandler}>forwardRef</button>
      </div>
    );
  }
}

export default FRParentComponent;
