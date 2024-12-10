import React, { useState } from "react";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="" alt="Logo" className="logo" /> */}
        <span className="brand-name">Hostel-17 | IIT Bombay</span>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        {/* <a href="#images">Images</a> */}
        <a href="#contact">Contact Us</a>
        <a href="#gallery">Gallery</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
