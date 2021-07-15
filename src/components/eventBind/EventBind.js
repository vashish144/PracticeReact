import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Vikram",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    this.setState({
      message: "Good By!",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>clickMe</button> */}
        {/* <button onClick={this.clickHandler}>ClickMe</button> */}
        {/* <button onClick={() => this.clickHandler()}>ClickMe</button> */}
        <button onClick={this.clickHandler}>clickMe</button>
      </div>
    );
  }
}

export default EventBind;
