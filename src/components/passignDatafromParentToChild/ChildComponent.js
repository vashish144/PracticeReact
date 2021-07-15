import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.geetHandler}>Greet Parent</button> */}
      <button onClick={() => props.geetHandler("vikram")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
