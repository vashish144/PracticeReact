import React from "react";
import PersonList from "./PersonList";
function Person() {
  const PersonDetail = [
    { id: 1, name: "vikram", roll: 1, subject: "math" },
    { id: 2, name: "ashish", roll: 2, subject: "english" },
    { id: 3, name: "rahul", roll: 3, subject: "s.s.t" },
  ];
  const PersonLists = PersonDetail.map((person) => (
    <PersonList key={person.id} person={person} />
  ));
  return <div>{PersonLists}</div>;
}

export default Person;
