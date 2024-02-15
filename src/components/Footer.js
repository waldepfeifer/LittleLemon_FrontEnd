import React from "react"; // Import React library for creating the component
import small_logo from "../images/GreenLittleLemon.png"; // Import a small logo for use in the footer

// Functional component Footer definition
const Footer = () => {
    return(
        // Footer element to contain the footer content
        <footer className="">
            {/* Section to group footer content */}
            <section>
                {/* Company information section */}
                <div className="company-info">
                    {/* Company logo */}
                    <img src={small_logo} alt="Company Logo"/> {/* Added alt text for accessibility */}
                    {/* Company description */}
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                {/* Important links section */}
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        {/* List of navigation links */}
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                {/* Contact information section */}
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Town Street, Chicago</li>
                        <li>Phone: <br/> +00 123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                {/* Social media links section */}
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        {/* List of social media links */}
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer; // Export Footer component for use in other parts of the application
