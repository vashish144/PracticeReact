import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("handler clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>clickMe</button>
    </div>
  );
}

export default FunctionClick;
