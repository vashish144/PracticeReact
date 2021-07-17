import React from "react";

function NameList() {
  const names = ["virkam", "ashish", "vishal", "rohit", "monu"];
  const nameList = names.map((name) => <h1>{name}</h1>);
  return (
    <div>
      {nameList}
      {/* {names.map((name) => (
        <h1>{name}</h1>
      ))} */}
    </div>
  );
}

export default NameList;
