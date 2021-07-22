import React, { Component } from "react";
import ErrorBounday from "./ErrorBounday";
import Hero from "./Hero";

export class ParentHero extends Component {
  render() {
    return (
      <div>
        <ErrorBounday>
          <Hero heroName={"vikram"} />
        </ErrorBounday>
        <ErrorBounday>
          <Hero heroName={"jon"} />
        </ErrorBounday>
        <ErrorBounday>
          <Hero heroName={"joker"} />
        </ErrorBounday>
      </div>
    );
  }
}

export default ParentHero;
