import React, { Component } from "react";
import ClassComponentA from "./ClassComponentA";
import { UserProvider } from "./ContextClass";

class ContextApp extends Component {
  render() {
    return (
      <UserProvider value="vikram">
        <ClassComponentA />
      </UserProvider>
    );
  }
}

export default ContextApp;
