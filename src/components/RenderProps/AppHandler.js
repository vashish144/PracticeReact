import React, { Component } from "react";
import ClickIncrementComponent from "./ClickIncrementComponent";
import Counter from "./Counter";
import HoverIncrementComponent from "./HoverIncrementComponent";
import User from "./User";

class AppHandler extends Component {
  render() {
    return (
      <div>
        <Counter
          render={(count, incrementCount) => (
            <ClickIncrementComponent
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverIncrementComponent
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />
        {/* <HoverIncrementComponent />
        <ClickIncrementComponent />
        <User render={(isLogin) => (isLogin ? "virkam" : "Guest")} /> */}
      </div>
    );
  }
}

export default AppHandler;
