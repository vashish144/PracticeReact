import React from "react";

function Welcom({ name, roll, children }) {
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
