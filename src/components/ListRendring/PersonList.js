import React from "react";

function PersonList({ person }) {
  return (
    <div>
      <h2 >
        HI {person.name} your roll no is {person.roll} and your subject is{" "}
        {person.subject}
      </h2>
    </div>
  );
}

export default PersonList;
