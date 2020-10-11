import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Person name="Rupesh" age='21' />
      <Person name="Ram" age='25'/>
      <Person name="Shyam" age='30'>Loves Football</Person>
    </div>
    // React.createElement('div',{className: "App"}, React.createElement('h1',{},'Hello World!!'))
  );
}

export default App;
