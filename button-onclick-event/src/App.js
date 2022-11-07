import './App.css';

/* This file demonstrates that...
   
   Event handlers can be defined in at least 4 different places:
   - inside your component
   - outside your component as a global variable 
     (I confirmed this in ~/gh/react-learn/button-onclick-event/src/App.js)
   - directly, inside the onClick attribute of the button HTML element
   - or  the parent can tell the child button what event handling function
     to run, when the button is clicked on!   It's passed from parent 
     component to child component via props, which are like 
     function parameters in the child component definition.

   Several function components can be defined within a single file.

   The CSS properties of a Button can be defined in several places.
*/

function MyButtonA() {
    function handleClick() {
        console.log("This button event handler was defined INSIDE the button component");
    }
    return (
        <button className="App-button"
          onClick={handleClick}>button A</button>
    );
}



function handleClickB() {
    console.log("This button event handler was defined OUTSIDE the button component (ie globally)");
}

function MyButtonB() {
    return (
        <button style={{ color:"blue" }} 
          onClick={handleClickB}>button B</button>
    );
}


function MyButtonC() {
    return (
        <button
          onClick={ () => {
            console.log("This button event handler was defined INSIDE the onClick attribute of the button HTML tag.");
          }}>button C</button>
    );
}


function MyButtonD({onClick}) {
    return (
        <button onClick={onClick} >button D</button>
    );
}


function App() {
  function handleClickD() {
    console.log("This button event handler was defined inside the PARENT component and then passed down to the CHILD button component through PROPS.");
  }

  return (
    <div className="App">
        <MyButtonA />
        <MyButtonB />
        <MyButtonC />
        <MyButtonD onClick={handleClickD} />
    </div>
  );
}

export default App;
