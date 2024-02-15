import React from "react"; // Import React library for building UI components
import BookingForm from "./BookingForm"; // Import BookingForm component to be used within this component

// Functional component Booking accepting props
const Booking = (props) => {
    // Component simply renders the BookingForm component and passes down props
    return (
        // BookingForm component is used here with props passed to it for availability, dispatch, and form submission functionality
        <BookingForm
            availableTimes={props.availableTimes} // Passes available times to BookingForm for time selection
            dispatch={props.dispatch} // Passes dispatch function to BookingForm for handling date changes or other actions
            submitForm={props.submitForm} // Passes submitForm function to BookingForm to handle the form submission
        />
    );
}

export default Booking; // Export Booking component for use in other parts of the application
