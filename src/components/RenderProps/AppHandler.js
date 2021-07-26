import React, { Component } from "react";
import ClickIncrementComponent from "./ClickIncrementComponent";
import HoverIncrementComponent from "./HoverIncrementComponent";
import User from "./User";

class AppHandler extends Component {
  render() {
    return (
      <div>
        <HoverIncrementComponent />
        <ClickIncrementComponent />
        <User render={(isLogin) => (isLogin ? "virkam" : "Guest")} />
      </div>
    );
  }
}

export default AppHandler;
