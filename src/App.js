import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
          {name: 'Rajnish', age:30},
          {name: 'Singh', age:32}
        ]
  }
// var [personstate, personsetState] = useState({
//   person : [
//     {name: 'Rajnish', age:30},
//     {name: 'Singh', age:32}
//   ]
// });
changeNameHandler = (changeName) => {
  console.log('Was clicked');
  // Don’t do this// this.state.person[0].name = 'Rajnish';
  this.setState({
    person : [
      {name: changeName, age:30},
      {name: 'Kumar', age:32}
    ]
  });
}

// const changeNameHandler = () => {
//   console.log('Was clicked');
//   // this.state.person[0].name = 'Rajnish';
//   personsetState({
//     person : [
//       {name: 'Raj', age:30},
//       {name: 'Kumar', age:32}
//     ]
//   });
// }
render() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.changeNameHandler.bind(this, 'rrrr')}>Click</button>
        <Person name={this.state.person[0].name} click={this.changeNameHandler.bind(this, 'kumar')}>hi</Person>
        <Person name={this.state.person[1].name}></Person>
      </header>
    </div>
  
  );
}
}

export default App;
