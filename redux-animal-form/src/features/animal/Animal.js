import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  // actions
  turnIntoWolf, 
  makeItCute, 
  switcheroo,

  // selectors
  selectName,
} from './animalSlice';

const H6 = styled.h6`
  color: maroon;
  font-size: 1em;
  margin-bottom: 5px;
`;

const SubmitDiv = styled.div`
  margin-top: 40px;
  margin-right: 60px;
  max-width: 400px;
  text-align: right;
`;

const FormGroup = styled.div`
  margin-bottom: 50px;
`;

const Label = styled.label`
  color: maroon;
  font-weight: bold;
`;

const Input = styled.input`
  margin-left: 20px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid maroon;
  color: maroon;
  margin: 0.25em 0.5em;
  padding: 0.25em 1em;
`;

export function Animal() {
  // get the name from the Redux store
  const nameFromTheStore = useSelector(selectName);
  const dispatch = useDispatch();
  const initialInputAnimalState = { 
    name: 'Joe', 
    type: 'fox',
    requestGroomingService: false,
    requestMedicalCheckup: false,
    requestDentalCheckup: false,
    requestGourmetMeal: false,
    areVaccinesUpToDate: false,
    isSpayedNeutered: false,
  };
  const [inputAnimal, setInputAnimal] = useState(initialInputAnimalState);

  // The shorter way: (see the <input> element that uses this method below). 
  // Just define the function inline 
  // and pass setInputAnimal an object that is the new state
  // onChange={(e) => setInputAnimal({ ...inputAnimal, name: e.target.value})}
  //
  // Here's a longer way:
  const changeName = (e) => {
    const name = e.target.value;
    console.log("1", {name});
    // Pass setInputAnimal a function that, given a previous state as an argument,
    // will return the new state.
    setInputAnimal( prevState => { 
      // In StrictMode, React calls the updater function twice,
      // so the console.logs will print twice.
      console.log("2", {name});
      console.log("3", prevState);
      // using object property shorthand 'name'
      // instead of 'name: name'
      return {...prevState, name }
    });
  }

  // if the name attribute is set, we can use this event handler
  const handleRadioButtonChange = (e) => {
    const name = e.target.name;
    const value = (e.target.value === 'yes') ? true : false;
    setInputAnimal( prevState => ({ ...prevState, [name]: value}));
  }

  // if the name attribute is set, we can use this event handler
  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;  // whether the checkbox is checked or not
    setInputAnimal( prevState => ({ ...prevState, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputAnimal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{nameFromTheStore} named {inputAnimal.name}</h1>
      <FormGroup>
        <Label>
          Enter animal name: 
          <Input
            aria-label="Set input animal name"
            value={inputAnimal.name}
            onChange={(e) => changeName(e)}
            autoFocus 
          />
          {/* autoFocus:  automatically get focus when the page loads */}
        </Label>
        <Button
          onClick={() => console.log("do nothing on name change")}
        >
          Change animal name 
        </Button>
      </FormGroup>
      <FormGroup>
        <Label>
          Enter animal type: 
          <Input
            aria-label="Set input animal type"
            value={inputAnimal.type}
            onChange={(e) => setInputAnimal({ ...inputAnimal, type: e.target.value})}
          />
        </Label>
        <Button
          onClick={() => dispatch(switcheroo(inputAnimal.type))}
        >
          Change animal type 
        </Button>
        <Button
          aria-label="Change to wolf"
          onClick={() => {
            //console.log("About to dispatch(turnIntoWolf)");
            //console.log(turnIntoWolf);
            dispatch(turnIntoWolf());
          }}
        >
          Change name to wolf
        </Button>
        <Button
          aria-label="Make it cute"
          onClick={() => dispatch(makeItCute())}
        >
          Make it cute 
        </Button>
      </FormGroup>
      {/* radio buttons for areVaccinesUpToDate and isSpayedNeutered */}
      <div>
        <H6>Are vaccines up to date?</H6>
        <input type="radio" id="yes" name="areVaccinesUpToDate" value="yes"
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="yes">yes</label><br />
        <input type="radio" id="no" name="areVaccinesUpToDate" value="no"
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="no">no</label>
      </div>
      <div>
        <H6>Is spayed / neutered?</H6>
        <input type="radio" id="yes" name="isSpayedNeutered" value="yes"
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="yes">yes</label><br />
        <input type="radio" id="no" name="isSpayedNeutered" value="no"
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="no">no</label>
      </div>

      {/* checkboxes for requestGroomingService, requestMedicalCheckup, 
          requestDentalCheckup, and requestGourmetMeal*/}
      <div>
        <H6>Do you request any of these additional services</H6>
        <input type="checkbox" id="groomingService" name="requestGroomingService" value="yes"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="groomingService">Request grooming service</label><br />
        <input type="checkbox" id="medicalCheckup" name="requestMedicalCheckup" value="yes"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="medicalCheckup">Request medical checkup</label><br />
        <input type="checkbox" id="dentalCheckup" name="requestDentalCheckup" value="yes"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="dentalCheckup">Request dental checkup</label><br />
        <input type="checkbox" id="gourmetMeal" name="requestGourmetMeal" value="yes"
          onChange={handleCheckboxChange}
          disabled
        />
        <label htmlFor="gourmetMeal" style={{color: "grey"}}>Request gourmet meal (currently not available)</label>
      </div>
      <SubmitDiv>
        <input type="submit" />
      </SubmitDiv>
    </form>
  );
}
