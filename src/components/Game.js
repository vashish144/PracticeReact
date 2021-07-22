import React, { Component } from "react";

export class Game extends Component {
  render() {
    //calling the state and props distructuring under render method
    const { name, Play, children } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h2>
          Hello {name} playing  ia am {Play}
        </h2>
        <p>yes {children}</p>
      </div>
    );
  }
}

export default Game;
