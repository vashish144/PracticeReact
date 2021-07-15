import React from "react";

function Welcom(props) {
  console.log(props);

  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default Welcom;
