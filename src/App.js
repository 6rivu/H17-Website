import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
// import Gallery from './components/Gallery';
import './index.css';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;
