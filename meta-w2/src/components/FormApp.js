import React from 'react';
import Header from './Header';
import PersonForm from './PersonForm';

const FormApp = () => {
  return (
    <div className="App">
      <Header txt="Form App" />
      <PersonForm />
    </div>
  );
};

export default FormApp;
