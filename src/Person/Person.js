import React from "react";

const person = (props) => {
  return (
    <div>
      <h1>
        I'm a {props.name} and I'm {props.age} years young.
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
