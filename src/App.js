import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'tdty', name: 'Rajnish', age: 28 },
      {id:'ukt7g', name: 'Bikash', age: 29 },
      {id:'jg5dty', name: 'Ricky', age: 26 }
    ],
    otherState: 'some other value',
    showPersion: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
    });
    // console.log(persons);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 26 }
    //   ]
    // })
  }

  deleteChangeHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  toggalValue = () => {
    const doesShow = !this.state.showPersion;
    this.setState({
      showPersion: doesShow
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Other Way to write conditional statment
    let persons = 'No Data Found';
    if (this.state.showPersion) {
      persons = (<div>
        { this.state.persons.map((person, index) => {
          return <Person name={person.name} 
          age={person.age} 
          click={() => this.deleteChangeHandler(index)} 
          key={person.id}
          changed={(event)=> this.nameChangedHandler(event, person.id)}/>
        })}
      </div>)  
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.toggalValue}>Show/Hide</button>
       
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
