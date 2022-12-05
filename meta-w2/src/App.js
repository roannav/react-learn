import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About";
import ButtonApp from "./components/ButtonApp";
import CardApp from "./components/CardApp";
import FormApp from "./components/FormApp";
import FruitsApp from "./components/FruitsApp";
import GuessNumberGame from "./components/GuessNumberGame";
import Home from "./components/Home";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/buttons" element={<ButtonApp/>}/>
        <Route exact path="/cards" element={<CardApp/>}/>
        <Route exact path="/form" element={<FormApp/>}/>
        <Route exact path="/fruits" element={<FruitsApp/>}/>
        <Route exact path="/guess-number-game" element={<GuessNumberGame/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/input" element={<Input/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
