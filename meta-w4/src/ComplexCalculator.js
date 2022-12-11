import { useState, } from "react";
import 'antd/dist/reset.css';
import {Col, Row, Button} from 'antd';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

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
      <div className="results-display">
        {firstNumber} {(operand!=='none') && operand } {(operand!=='none') && !isNaN(secondNumber) && secondNumber}
      </div>
      </Row>
      <Row justify="center">
        <NumberButton num={7} handleClick={(e) => handleNumberPress(e, 7)} />
        <NumberButton num={8} handleClick={(e) => handleNumberPress(e, 8)} />
        <NumberButton num={9} handleClick={(e) => handleNumberPress(e, 9)} />
        <ActionButton action="AC" handleClick={(e) => resetInput(e) } />
      </Row>
      <Row justify="center">
        <NumberButton num={4} handleClick={(e) => handleNumberPress(e, 4)} />
        <NumberButton num={5} handleClick={(e) => handleNumberPress(e, 5)} />
        <NumberButton num={6} handleClick={(e) => handleNumberPress(e, 6)} />
        <ActionButton action='+' handleClick={(e) => plus(e)} />
      </Row>
      <Row justify="center">
        <NumberButton num={1} handleClick={(e) => handleNumberPress(e, 1)} />
        <NumberButton num={2} handleClick={(e) => handleNumberPress(e, 2)} />
        <NumberButton num={3} handleClick={(e) => handleNumberPress(e, 3)} />
        <ActionButton action='-' handleClick={(e) => minus(e)} />
      </Row>
      <Row justify="center">
        <NumberButton num={0} handleClick={(e) => handleNumberPress(e, 0)} />
        <ActionButton action='x' handleClick={(e) => times(e)} />
        <ActionButton action='÷' handleClick={(e) => divide(e)} />
        <Button size="large" className="calc-button equals-button" onClick={ equals }>=</Button>
      </Row>
    </form>
  );
}

export default ComplexCalculator;
