import React, { Component } from "react";
import { UserConsumer } from "./ContextClass";

class ClassComponentD extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h1>hello {username}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ClassComponentD;
