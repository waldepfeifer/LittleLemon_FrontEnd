import React, { useState } from "react"; // Import React and useState hook for managing component state
import logo from "../images/Logo.svg"; // Import the logo image

// Functional component Nav definition
const Nav = () => {
  // useState hook to manage the menu's open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu's open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state between true and false
  };

  return (
    // Navigation bar with dynamic class based on menu's state
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* Link to the homepage with the logo */}
      <a href="/" className="logo">
        {/* Logo image */}
        <img src={logo} alt="Company Logo" /> {/* Added meaningful alt text for accessibility */}
      </a>
      {/* Menu icon that users click to toggle the menu's visibility */}
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Visual representation of the menu icon with 3 bars */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation links with dynamic class for visibility based on the menu's state */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        {/* Individual navigation items */}
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/booking">Order Online</a></li> {/* Example of a different link for action */}
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav; // Export the Nav component for use in other parts of the application
