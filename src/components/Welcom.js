import React from "react";

function Welcom({ name, roll, children }) {
  //   const { name, roll, children } = this.props;
  return (
    <div>
      <h1>
        Welcome {name} and roll is {roll}
      </h1>
      <p>{children}</p>
    </div>
  );
}

export default Welcom;
