import React from 'react';
import Nav from './Nav';
import HeadingAndLogo from './HeadingAndLogo';

export default function Header(props) {
  return (
    <>
      <HeadingAndLogo txt={props.txt} />
      <Nav />
    </>
  );
};
