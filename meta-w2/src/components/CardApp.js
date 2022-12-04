import '../App.css';
import React from 'react';
import Header from './Header';
import Greeting from './Greeting';
import Card from './Card';

export default function GuessNumberGame() {
  return (
    <div className="App">
      <Header txt="Card App" />
      <Greeting firstName="Sally"/>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
  );
}





