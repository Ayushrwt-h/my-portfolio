import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';
import Skill from './Components/Skill/Skill';
import ContactMe from './Components/ContactMe/ContactMe';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Navbar />
      {/* Each section component should have a corresponding ID for in-page navigation */}
      <div id="hero">
        <Hero />
      </div>
      <div id="skill">
        <Skill />
      </div>
      
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}

export default App;
