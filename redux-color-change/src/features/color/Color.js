import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  // actions
  actionCyan,
  actionTomato,
  actionColor,

  // selectors
  selectColorific,
} from './colorSlice';



export default function Color() {
  // get the color from the Redux store
  const color = useSelector(selectColorific);

  const dispatch = useDispatch();
  const [inputColor, setInputColor] = useState('blue');

  const h1Element = useRef();

  useEffect(() => {
    console.log("useEffect3:  color =", color);
    console.log(h1Element.current);
    // Change the color of the <h1> text to match the 'color' variable.
    // h1Element.current is an HTML DOM element object.
    h1Element.current.style.color = color;
  }, [color]); // <- add the color variable here
               // So during the first render AND
               // anytime color changes, 
               // useEffect's callback function is called.

  return (
    <div>
      <h1 id="color-header" ref={h1Element}>The color of the year is {color}!</h1>
      <div>
        <button
          aria-label="Change color to cyan"
          onClick={ () => dispatch(actionCyan())}
        >Cyan</button>
      </div>
      <div>
        <button
          aria-label="Change color to tomato"
          onClick={ () => dispatch(actionTomato())}
        >Tomato</button>
      </div>
      <div>
        <input
          aria-label="set input color"
          value = {inputColor}
          onChange={ (e) => setInputColor(e.target.value)}
        />
        <button
          onClick={() => dispatch(actionColor(inputColor))}
        >
          Update color
        </button>
      </div>
    </div>
  );
}
