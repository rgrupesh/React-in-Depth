import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Rupesh", age: 21 },
      { id: "b", name: "Ram", age: 25 },
      { id: "c", name: "Shyam", age: 30 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Ram", age: 25 },
        { name: "Shyam K.C", age: 30 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  toogleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClasses = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => {
                this.deleteNameHandler(index);
              }}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
      btnClasses = classes.Red;
    }

    const classesAssig = [];
    if (this.state.persons.length <= 2) {
      classesAssig.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      classesAssig.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello World!</h1>
        <p className={classesAssig.join(" ")}>
          Yo 148, 3-to-the-3-to-the-6-to-the-9
        </p>
        <button className={btnClasses} onClick={this.toogleNameHandler}>
          Toogle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
