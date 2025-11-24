import React from 'react';
import Hero from './home/Hero';
import About from './home/About';
import Activities from './home/Activities';
import Committee from './home/Committee';
import CallToAction from './home/CallToAction';
import ContactInfo from './home/ContactInfo';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <Activities />
      <Committee />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Home;