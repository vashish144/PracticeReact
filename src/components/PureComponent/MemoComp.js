import React from "react";

function MemoComp({ name }) {
  console.log(
    "****************** I am form memoComponent ***********************"
  );
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
