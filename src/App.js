import React from 'react';
import './App.css';
import LandingNavbar from './components/LandingNavbar/LandingNavbar';
import AboutPage1 from './components/About/AboutPage1';
import AboutPage2 from './components/About/AboutPage2';
import LandingHome from './components/LandingHome/LandingHome';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <LandingNavbar />
      <LandingHome />
      <AboutPage1 />
      <AboutPage2 />
      <Contact />
    </div>
  );
}

export default App;
