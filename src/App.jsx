import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Experiences /> 
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;