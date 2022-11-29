import React from 'react';
import './App.css';
import Footer from './sections/footer/Footer';
import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/section4/Section4';
import Section5 from './sections/Section5/Section5';
import Section6 from './sections/section6/Section6';
import Section7 from './sections/section7/Section7';
import Section8 from './sections/section8/Section8';
const HomeScreen = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
};

export default HomeScreen;
