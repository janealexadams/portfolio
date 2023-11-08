import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      {/* navbar will have about me, portfolio, contact, resume */}
      <Navbar />
      <Header />
      {/* <Projects />
      <Contact />
      <Resume /> */}
    </div>
  );
}

export default App;
