import React, { Component } from "react";

export class Game extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <p>yes {this.props.children}</p>
      </div>
    );
  }
}

export default Game;
