import React, { Component, PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "vikram",
    };
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          name: "vikram",
        }),
      2000
    );
  }
  render() {
    return (
      <div>
        ParenComponent
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}
