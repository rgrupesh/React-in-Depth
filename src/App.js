import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      padding: "8px",
      cursor: "pointer",
      border: "1px solid brown",
      ":hover": {
        backgroundColor: "yellow",
        color: "blue",
      },
    };

    let persons = null;

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
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "blue",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p className={classes.join(" ")}>
          Yo 148, 3-to-the-3-to-the-6-to-the-9
        </p>
        <button style={style} onClick={this.toogleNameHandler}>
          Toogle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
