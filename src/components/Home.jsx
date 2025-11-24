import React from 'react';
import Hero from './home/Hero';
import About from './home/About';
import Activities from './home/Activities';
import Committee from './home/Committee';
import CallToAction from './home/CallToAction';
import ContactInfo from './home/ContactInfo';

const Home = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Hero />
      <About />
      <Activities />
      <CallToAction />
      <Committee />
      <ContactInfo />
    </div>
  );
};

export default Home;