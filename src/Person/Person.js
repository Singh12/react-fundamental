// We need to import react because we need to use RXJS file to be use in file like below return

import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>Hi I am {props.name} {Math.floor(Math.random()*30)} </h1>
            {props.children}
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
      
    );
}

export default person;