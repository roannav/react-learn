import React from "react";
import '../App.css';
import Header from './Header';
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function FruitsApp() {
  // internal state, managed by React
  const [fruits] = React.useState([
    {fruitName: 'apple', id:1},
    {fruitName: 'apple', id:2},
    {fruitName: 'plum', id:3},
  ]);

  return (
    <div className="App">
      <Header txt="Fruits App" />
      <h1>Where should the state go?</h1>
      {/* Send the fruit data to the child components */}
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default FruitsApp;




