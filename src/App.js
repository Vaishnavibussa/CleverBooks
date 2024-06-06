import React from 'react';
import './App.css';
// import Hero from './components/Hero';
import Hero from './components/Hero';
import KeyProblems from './components/KeyProblems';
import KeyMetrics from './components/KeyMetrics';
import Reviews from './components/Reviews';
import ProblemTarget from './components/ProblemTarget';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <KeyProblems />
      <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
