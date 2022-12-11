import {
  useState,
  useRef
} from "react"; 
import 'antd/dist/reset.css';
import {Col, Row, InputNumber, Button} from 'antd';

function ComplexCalculator() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 

  // This is what is displayed in InputNumber
  const [result, setResult] = useState('0'); 
  // TODO: maybe this is not state, but just calculated.

  const [firstNumber, setFirstNumber] = useState(0); 

  const [operand, setOperand] = useState('none');

  const [secondNumber, setSecondNumber] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    if (result !== "undefined") {
      setOperand('+');
      setSecondNumber(0);
      setResult(result + " + ");
    }
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    if (result !== "undefined") {
      setOperand('-');
      setSecondNumber(0);
      setResult(result + " - ");
    }
  };
 
  function times(e) { 
    e.preventDefault(); 
    if (result !== "undefined") {
      setOperand('x');
      setSecondNumber(0);
      setResult(result + " x ");
    }
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if (result !== "undefined") {
      setOperand('÷');
      setSecondNumber(0);
      setResult(result + " ÷ ");
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    setFirstNumber(0);
    setSecondNumber(0);
    setOperand('none');
  }; 
 
  function resetResult(e) { 
    setResult('0'); 
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
          setFirstNumber(0);
          setOperand('none');
          setResult("undefined");  // divide by 0, results in "undefined"
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
    setResult(String(r));
    setOperand('none');
  }

  function handleNumberPress(e, number) { 
    e.preventDefault(); 
    console.log(number);
    let n = number;
    if (operand === "none") {
      if (Number.isInteger(firstNumber)) {
        n += firstNumber * 10;
      } else {
        n = Number.parseFloat(firstNumber.toString() + number);
      }
      setFirstNumber(n);
      setResult(String(n));
    } else {
      if (Number.isInteger(secondNumber)) {
        n += secondNumber * 10;
      } else {
        n = Number.parseFloat(secondNumber.toString() + number);
      }
      setSecondNumber(n);
      setResult(result + String(number));
    }
  }

  return ( 
      <form> 
        <Row justify="center">
          <InputNumber style={{ backgroundColor:"whitesmoke", width:"206px", fontWeight:800 }} size="large" disabled={true} value={result} />
        </Row>
        <Row justify="center">
          <Button size="large" className="number-button" name="7" onClick={ (e)  => handleNumberPress(e, 7) }>7</Button> 
          <Button size="large" className="number-button" name="8" onClick={ (e) => handleNumberPress(e, 8) }>8</Button> 
          <Button size="large" className="number-button" name="9" onClick={ (e) => handleNumberPress(e, 9) }>9</Button> 
          <Button size="large" className="calc-button" onClick={(e) => { resetInput(e); resetResult(e); } }>AC</Button> 
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
