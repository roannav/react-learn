import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  // actions
  turnIntoWolf, 
  makeItCute, 
  switcheroo,

  // selectors
  selectName,
} from './animalSlice';

export function Animal() {
  // get the name from the Redux store
  const nameFromTheStore = useSelector(selectName);
  const dispatch = useDispatch();
  const [inputAnimal, setInputAnimal] = useState({ name: 'Joe', type: 'fox'});

  // The shorter way: (see the <input> element that uses this method below). 
  // Just define the function inline 
  // and pass setInputAnimal an object that is the new state
  // onChange={(e) => setInputAnimal({ ...inputAnimal, name: e.target.value})}
  //
  // Here's a longer way:
  const changeName = (e) => {
    const name = e.target.value;
    console.log("1", {name});
    // Pass setInputAnimal a function that, given a previous state as an argument,
    // will return the new state.
    setInputAnimal( prevState => { 
      // In StrictMode, React calls the updater function twice,
      // so the console.logs will print twice.
      console.log("2", {name});
      console.log("3", prevState);
      // using object property shorthand 'name'
      // instead of 'name: name'
      return {...prevState, name }
    });
  }

  return (
    <div>
      <h1>{nameFromTheStore} named {inputAnimal.name}</h1>
      <div>
        <label>
          Enter animal name: 
          <input
            aria-label="Set input animal name"
            value={inputAnimal.name}
            onChange={(e) => changeName(e)}
          />
        </label>
        <button
          onClick={() => console.log("do nothing on name change")}
        >
          Change animal name 
        </button>
      </div>
      <div>
        <label>
          Enter animal type: 
          <input
            aria-label="Set input animal type"
            value={inputAnimal.type}
            onChange={(e) => setInputAnimal({ ...inputAnimal, type: e.target.value})}
          />
        </label>
        <button
          onClick={() => dispatch(switcheroo(inputAnimal.type))}
        >
          Change animal type 
        </button>
        <button
          aria-label="Change to wolf"
          onClick={() => {
            //console.log("About to dispatch(turnIntoWolf)");
            //console.log(turnIntoWolf);
            dispatch(turnIntoWolf());
          }}
        >
          Change name to wolf
        </button>
        <button
          aria-label="Make it cute"
          onClick={() => dispatch(makeItCute())}
        >
          Make it cute 
        </button>
      </div>
    </div>
  );
}
