import React from "react";

import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  let btnClasses = "";
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  const classesAssig = [];
  if (props.persons.length <= 2) {
    classesAssig.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classesAssig.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello World!</h1>
      <h2>{props.title}</h2>
      <p className={classesAssig.join(" ")}>
        Yo 148, 3-to-the-3-to-the-6-to-the-9
      </p>
      <button className={btnClasses} onClick={props.toggle}>
        Toogle Person
      </button>
    </div>
  );
};

export default cockpit;
