import React from "react";

function MemoComp({ name }) {
  console.log("i am form memoComponent");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
