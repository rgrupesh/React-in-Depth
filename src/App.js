import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Rupesh", age: 21 },
      { name: "Ram", age: 25 },
      { name: "Shyam", age: 30 },
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Rupesh", age: 21 },
        { name: "Ram", age: 25 },
        { name: event.target.value, age: 30 },
      ],
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
      backgroundColor: "white",
      padding: "8px",
      cursor: "pointer",
      border: "1px solid brown",
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
            />
          ))}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={this.toogleNameHandler}>
          Toogle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
