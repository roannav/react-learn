import React from 'react';
import Header from './Header';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Promo from './Promo';
import Footer from './Footer';

const About = () => {
  return (
    <div className="App">
      <Header txt="About Me" />
      <div style={{padding:50, marginTop:10}}>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>
      <Promo />
      <Footer />
    </div>
  );
};

export default About;
