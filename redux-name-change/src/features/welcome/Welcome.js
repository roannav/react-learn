import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  // actions
  changeNameToMary,
  changeName,

  // selectors
  selectName,
} from './welcomeSlice';

export function Welcome() {
  // get the name from the Redux store
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('Bob');

  return (
    <div>
      <h1>Welcome {name}!</h1>
      <div>
        <button
          aria-label="Change name to Mary"
          onClick={() => dispatch(changeNameToMary())}
        >
          Change name to Mary 
        </button>
      </div>
      <div>
        <input
          aria-label="Set input name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button
          onClick={() => dispatch(changeName(inputName))}
        >
          Change name
        </button>
      </div>
    </div>
  );
}
