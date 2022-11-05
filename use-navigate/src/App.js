import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page1/>}/>
        <Route exact path="/page1" element={<Page1/>}/>
        <Route exact path="/page2" element={<Page2/>}/>
        <Route exact path="/page3" element={<Page3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

