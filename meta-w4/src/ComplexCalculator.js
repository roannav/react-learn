import { useState, } from "react";
import 'antd/dist/reset.css';
import {Col, Row, Button} from 'antd';

function ComplexCalculator() { 
  const [firstNumber, setFirstNumber] = useState(0); 
  const [operand, setOperand] = useState('none');
  const [secondNumber, setSecondNumber] = useState(NaN); 
 
  function plus(e) { 
    e.preventDefault(); 
    if (firstNumber !== "undefined") {
      setOperand('+');
      setSecondNumber(NaN);
    }
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    if (firstNumber !== "undefined") {
      setOperand('-');
      setSecondNumber(NaN);
    }
  };
 
  function times(e) { 
    e.preventDefault(); 
    if (firstNumber !== "undefined") {
      setOperand('x');
      setSecondNumber(NaN);
    }
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if (firstNumber !== "undefined") {
      setOperand('÷');
      setSecondNumber(NaN);
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    setFirstNumber(0);
    setSecondNumber(NaN);
    setOperand('none');
  }; 
 
  function equals(e) { 
    e.preventDefault(); 
    let r=0;
    switch(operand) {
      case '+':
        r = firstNumber + secondNumber;
        break;
      case '-':
        r = firstNumber - secondNumber;
        break;
      case 'x':
        r = firstNumber * secondNumber;
        break;
      case '÷':
        if (secondNumber === 0) {
          // divide by 0, results in "undefined"
          setFirstNumber('undefined');
          setOperand('none');
          return;
        }
        r = firstNumber / secondNumber;
        break;
      case 'none':
        return;  // don't do anything
      default:
        console.log("ERROR: unexpected operand", operand);
    }

    setFirstNumber(r);
    setOperand('none');
  }

  function handleNumberPress(e, number) { 
    e.preventDefault(); 
    console.log(number);
    let n = number;
    if (operand === "none") {
      n = Number.parseFloat(firstNumber.toString() + number);
      setFirstNumber(n);
    } else {
      n = isNaN(secondNumber) ? number : Number.parseFloat(secondNumber.toString() + number);
      setSecondNumber(n);
    }
  }

  return ( 
    <form>
      <Row justify="center">
      <div className="resultsDisplay">
        {firstNumber} {(operand!=='none') && operand } {(operand!=='none') && !isNaN(secondNumber) && secondNumber}
      </div>
      </Row>
      <Row justify="center">
        <Button size="large" className="number-button" name="7" onClick={ (e)  => handleNumberPress(e, 7) }>7</Button>
        <Button size="large" className="number-button" name="8" onClick={ (e) => handleNumberPress(e, 8) }>8</Button>
        <Button size="large" className="number-button" name="9" onClick={ (e) => handleNumberPress(e, 9) }>9</Button>
        <Button size="large" className="calc-button" onClick={(e) => resetInput(e) }>AC</Button>
      </Row>
      <Row justify="center">
        <Button size="large" className="number-button" name="4" onClick={ (e) => handleNumberPress(e, 4) }>4</Button>
        <Button size="large" className="number-button" name="5" onClick={ (e) => handleNumberPress(e, 5) }>5</Button>
        <Button size="large" className="number-button" name="6" onClick={ (e) => handleNumberPress(e, 6) }>6</Button>
        <Button size="large" className="calc-button" onClick={ plus }>+</Button>
      </Row>
      <Row justify="center">
        <Button size="large" className="number-button" name="1" onClick={ (e) => handleNumberPress(e, 1) }>1</Button>
        <Button size="large" className="number-button" name="2" onClick={ (e) => handleNumberPress(e, 2) }>2</Button>
        <Button size="large" className="number-button" name="3" onClick={ (e) => handleNumberPress(e, 3) }>3</Button>
        <Button size="large" className="calc-button" onClick={ minus }>-</Button>
      </Row>
      <Row justify="center">
        <Button size="large" className="number-button" name="0" onClick={ (e) => handleNumberPress(e, 0) }>0</Button>
        <Button size="large" className="calc-button" onClick={ times }>x</Button>
        <Button size="large" className="calc-button" onClick={ divide }>÷</Button>
        <Button size="large" className="calc-button equals-button" onClick={ equals }>=</Button>
      </Row>
    </form>
  );
}

export default ComplexCalculator;
