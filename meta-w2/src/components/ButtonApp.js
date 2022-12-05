import React from 'react';
import { useState } from 'react';
import Header from './Header';

// This child component is being passed the event handler function as props
function SpecialButton( props) {
  return (
    <button onClick={props.onClick}> 
      {props.value} 
    </button> 
  );
}

export default function ButtonApp() { 
  const [movie, setMovie] = useState('No movie'); 
  const [flower, setFlower] = useState('No flower');
  const [hoverText, setHoverText] = useState('nothing');

  const style = {
    marginTop:"40px",
    marginBottom:"40px",
    paddingTop:"40px",
    paddingBottom:"40px",
    maxWidth:"400px",
    marginLeft:"auto",
    marginRight:"auto",
    border:"1px solid black",
    backgroundColor:"teal",
    color:"white"
  }

  function handleMouseOver1(txt) { 
    console.log(txt);
    setHoverText(txt);
  } 

  // IN: e: mouse over event
  function handleMouseOver2(e) { 
    console.log(e);
    console.log(e.target.innerText);
    setHoverText(e.target.innerText);
  } 

  return ( 
    <div className="App">
      <Header txt="Button App" />
      <div style={style}> 
        <p>You selected: {movie}</p> 
        <p>You are hovering over:<br />{ hoverText}</p>
        <button onClick={() => setMovie('Star Wars')}
          onMouseOver={() => handleMouseOver1('The Star Wars movie button')}
          onMouseOut={() => setHoverText('nothing')}> 
          Star Wars
        </button> 
        <button onClick={() => setMovie('Harry Potter')}
          onMouseOver={handleMouseOver2}
          onMouseOut={() => setHoverText('nothing')}>
          Harry Potter
        </button>
      </div> 
      <div style={style}> 
        <p>You selected: {flower}</p> 
        <SpecialButton value="tulip" onClick={() => setFlower('Tulip')} />
        <SpecialButton value="jasmine" onClick={() => setFlower('Jasmine')} />
      </div> 
    </div> 
  ); 
}
