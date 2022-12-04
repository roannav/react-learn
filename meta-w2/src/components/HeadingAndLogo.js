import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Heading(props) {
  return (<h1 style={{textAlign:"left", color:"blue"}}>{props.txt}</h1>)
}

export default function HeadingAndLogo(props) {
  return (
    <>
      <img style={{float:"left", marginTop:"7px", maxWidth:100}} src={logo} />
      <Heading txt={props.txt}/>
    </>
  );
}
