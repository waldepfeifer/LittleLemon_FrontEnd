import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import bannerImg from "../images/Lemon.png"; // Import the image to be used in the banner

// Functional component Header definition
const Header = () => {
  return (
    // Semantic header element for page header content
    <header className="header">
      <section>
        {/* Container for the banner content */}
        <div className="banner">
          {/* Restaurant name */}
          <h2>Little Lemon</h2>
          {/* Location descriptor */}
          <h3>Heart of Chicago</h3>
          {/* Short description of the restaurant */}
          <p>
            Family-run Mediterranean bistro, offering a blend of classic recipes and innovative culinary techniques.
          </p>
          {/* Navigation link to the booking page, wrapped around a button for user action */}
          <Link to="/booking">
            {/* Button for users to take action on booking a table */}
            <button aria-label="Book a table at Little Lemon">Book Now</button>
          </Link>
        </div>
        {/* Container for the image within the banner */}
        <div className="banner-img">
          {/* Image element with src pointing to the imported banner image */}
          <img src={bannerImg} alt="Cozy dining at our Mediterranean bistro" />
        </div>
      </section>
    </header>
  );
};

export default Header; // Export the Header component for use in other parts of the application
