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
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={() => this.switchNameHandler("Rupesh Gelal")}>
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Rupessshhh")}
        >
          Loves Football
        </Person>
      </div>
    );
  }
}

export default App;
