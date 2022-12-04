import React from 'react';
import { useState } from 'react';
import Header from './Header';

export default function Input() { 
  const [inputText, setInputText] = useState('hello'); 

  const style = {
    marginTop:"40px",
    marginBottom:"40px",
    paddingTop:"40px",
    paddingBottom:"40px",
    maxWidth:"400px",
    marginLeft:"auto",
    marginRight:"auto",
    border:"1px solid black",
    backgroundColor:"maroon",
    color:"white"
  }

  function handleChange(e) { 
    setInputText(e.target.value); 
  } 

  return ( 
    <div className="App">
      <Header txt="Input" />
      <div style={style}> 
        <input value={inputText} onChange={handleChange} /> 
        <p>You typed: {inputText}</p> 
        <button onClick={() => setInputText('hello')}> 
          Reset 
        </button> 
      </div> 
    </div> 
  ); 
}
