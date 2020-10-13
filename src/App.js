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
  render() {
    const style = {
      backgroundColor: "white",
      padding: "8px",
      cursor: "pointer",
      border: "1px solid brown",
    };
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={this.toogleNameHandler}>
          Toogle Person
        </button>
        {this.state.showPersons === true ? (
          <div>
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
              changed={this.nameChangeHandler}
            >
              Loves Football
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
