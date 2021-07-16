import React, { Component } from "react";

class ConditionRendringClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    // ********** short cicuit operator*********
    return this.state.isLogin && <h1>Welcome virkam</h1>;

    // *************** Ternary conditional operator*********
    // return this.state.isLogin ? (
    //   <h1>Welcome Vikram</h1>
    // ) : (
    //   <h1>Welcome Guest</h1>
    // );

    // *******Element variable*************
    // let Message;
    // if (this.state.isLogin) Message = <h1>Hello vikram</h1>;
    // else Message = <h1>Hello Guest</h1>;
    // return <div>{Message}</div>;

    // ***************ifelse******************
    // if (this.state.isLogin) return <h1>Hello vikram</h1>;
    // else return <h1>Hello Guest</h1>;

    // return (
    //   <div>
    //     <h1>Hello Vikram</h1>
    //     <h1>Hello Guest</h1>
    //   </div>
    // );
  }
}
export default ConditionRendringClass;
