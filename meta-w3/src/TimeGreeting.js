import { useState } from 'react';
import React from 'react';

// implicit return
const Roar = () => <h1 style={{color:"red"}}>Little Lemon is grumpy.  Grrr...  ROAR!</h1>;

const TimeGreeting = () => {
  const [wakeUp, setWakeUp] = useState(false);

  const time = new Date();
  let greetMessage;
  let hour = time.getHours();

  // create a dynamic message
  if (6 < hour && hour < 12) {
    greetMessage = "Good morning!";
  } else if (12 <= hour && hour < 18) {
    greetMessage = "Good afternoon!";
  } else {
    greetMessage = "Shh... Little Lemon is sleeping!";
  }

  const isSleepTime = (hour) => (hour < 6 || hour > 18);
  let style = isSleepTime 
    ? { backgroundColor: "black", color: "yellow", padding:"10px" } 
    : { backgroundColor: "yellow", color: "blue", padding:"10px" };

  return (
    <>
      <h1 style={style}>{greetMessage}</h1>

      {/* If Little Lemon is sleeping, then show a Wake Up button */}
      { isSleepTime(hour)
        ? <button onClick={() => setWakeUp(true)}>Wake up Little Lemon!</button>
        : ''
      }

      {/* If condition wakeUp is true, then show the <Roar> component */}
      { wakeUp && <Roar /> }
    </>
  );
};

export default TimeGreeting;
