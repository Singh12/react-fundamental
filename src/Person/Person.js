// We need to import react because we need to use RXJS file to be use in file like below return

import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>Hi I am {props.name} {Math.floor(Math.random()*30)} </h1>
            {props.children}
        </div>
      
    );
}

export default person;