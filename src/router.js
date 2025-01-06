// filepath: /Users/rivu/H17-Website/src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Council from './components/Council';
import Gallery from './components/Gallery';
import Council from './components/Council';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/council" element={<Council />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default Router;