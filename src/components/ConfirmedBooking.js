import React from "react"; // Import React library for creating the component

// Functional component ConfirmedBooking definition
const ConfirmedBooking = () => {
    // Component returns JSX to render the confirmation message
    return (
        // Container div with a class for styling purposes
        <div className="comfirm">
            {/* Nested div to potentially group more elements or for styling */}
            <div>
                {/* Heading with a confirmation message. The 'confirmed' part is wrapped in a span for potential styling */}
                <h1>Booking has been <span>confirmed!</span></h1>
            </div>
        </div>
    );
}

export default ConfirmedBooking; // Export the ConfirmedBooking component for use in other parts of the application
