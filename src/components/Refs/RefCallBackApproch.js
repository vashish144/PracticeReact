import React, { Component } from "react";

class RefCallBackApproch extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    console.log(this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  //   clickHandler() {
  //     alert(this.cbRef.value);
  //   }
  render() {
    return (
      <div>
        <input type="text" ref={this.setcbRef} />
        {/* <button onClick={this.clickHandler}>click</button> */}
      </div>
    );
  }
}

export default RefCallBackApproch;
