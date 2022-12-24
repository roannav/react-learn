import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectColorific } from './colorSlice';


export default function ColorCounter() {
  const [colorCount, setColorCount] = useState({
    'blue': 0,
    'cyan': 0,
    'tomato': 0,
    'red': 0,
  });
  const color = useSelector(selectColorific);

  // run on every render
  useEffect( () => {
    console.log("useEffect1:  New render occurred.  color is ", color);
  });

  // runs on the first render and anytime a dependency variable updates.
  useEffect( () => {
    console.log("useEffect2:  color has updated to", color);
    setColorCount( o => { 
      console.log("color =", color);
      const c = {...o};
      c[color] +=1; 
      return c;
    });
    // WARNING: this next line happens before setColorCount()'s 
    // callback completes
    console.log("colorCount =", colorCount);
  }, [color]);


  /*
  // run on every render
  useEffect( () => {
    console.log("New render occurred.  color is ", color);
    setColorCount( o => { o[color] +=1; return o; });
  });
  // This code is bad!
  // Warning: Maximum update depth exceeded.  This can
  // happen when a component calls setState inside useEffect, 
  // but useEffect either doesn't have a dependency array,
  // or one of the dependencies changes on every render.
  */



  return (
    <>
      <p>Blue Count: {colorCount['blue']}</p>
      <p>Cyan Count: {colorCount['cyan']}</p>
      <p>Tomato Count: {colorCount['tomato']}</p>
      <p>Red Count: {colorCount['red']}</p>
    </>
  );
}
