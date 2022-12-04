import '../App.css';
import React from 'react';
import Header from './Header';
import Greeting from './Greeting';

export default function GuessNumberGame() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div className="App">
      <Header txt="Guess the Number Game" />
      <Greeting firstName="Sally"/>
      <button onClick={handleClick}>
        Guess the number between 1 and 3.
      </button>

    </div>
  );
}





