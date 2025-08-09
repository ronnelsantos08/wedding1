// Navbar.tsx
import React, { useState } from 'react';
import'../style/Navbar.css';

const Navbar: React.FC = () => {
  // State to manage the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    
      {/* Optional: Brand/Logo */}
      <a href="#home" className="navbar-brand">Our Wedding</a>

      {/* Hamburger Button */}
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <div />
        <div />
        <div />
      </button>

      {/* Navigation List */}
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link" onClick={toggleMenu}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="/rsvp" className="navbar-link" onClick={toggleMenu}>RSVP</a>
        </li>
        <li className="navbar-item">
          <a href="/dresscode" className="navbar-link" onClick={toggleMenu}>Dress Code</a>
        </li>
       
        <li className="navbar-item">
          <a href="/entourage" className="navbar-link" onClick={toggleMenu}>Entourage</a>
        </li>
        <li className="navbar-item">
          <a href="/faq" className="navbar-link" onClick={toggleMenu}>FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
