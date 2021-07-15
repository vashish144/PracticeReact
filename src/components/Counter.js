import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //increment by 1
  IncrementCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("Incremented updated Value by 1: ", this.state.count)
    );
    console.log(this.state.count);
  }
  //decrement by1
  DecrementCount() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => console.log("Decremented updated value by 1", this.state.count)
    );
    console.log(this.state.count);
  }
  //increment by 5 using previous state and take the props value
  IncrementCountByFive() {
    this.setState(
      (prevStat, props) => ({
        count: prevStat.count + this.props.value,
      }),
      () => console.log("Increment update value by 5", this.state.count)
    );
    console.log(this.state.count);
  }
  //Decrement by 5 using previous state and take the props value
  DecrementCountByFive() {
    this.setState(
      (prevState, props) => ({
        count: prevState.count - this.props.value,
      }),
      () => console.log("Decrement update value by 5", this.state.count)
    );
    console.log(this.state.count);
  }
  render() {
    //distructuring of props
    const { value } = this.props;
    // distructuring of state
    const { count } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <p>Count:- {count}</p>
        <button onClick={() => this.IncrementCount()}>Increment</button>
        <button onClick={() => this.DecrementCount()}>Decrement</button>
        <button onClick={() => this.IncrementCountByFive()}>Increment-5</button>
        <button onClick={() => this.DecrementCountByFive()}>Decrement-5</button>
      </div>
    );
  }
}

export default Counter;
