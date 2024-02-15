import React, { useReducer } from "react"; // useEffect is imported but not used in the snippet
import { Route, Routes, useNavigate } from "react-router-dom"; // Importing components and hooks from react-router-dom for routing
import Booking from "./Booking"; // Booking component for handling reservations
import ConfirmedBooking from "./ConfirmedBooking"; // Component displayed once booking is confirmed
import Header from "./Header"; // Header component of the application

const Main = () => {
    // Function to generate seeded random numbers
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    // Simulates fetching available times from an API
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    
    // Stub function for submitting form data, simulates API submission
    const submitAPI = function(formData) {
        return true; // Always returns true for demonstration
    };

    // Initial state for useReducer, fetching available times for the current date
    const initialState = {availableTimes:  fetchAPI(new Date())}
    // useReducer hook for state management
    const [state, dispatch] = useReducer(updateTimes, initialState);

    // Reducer function to update available times based on selected date
    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();
    // Function to handle form submission and navigate to confirmation page if successful
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed"); // Navigates to the confirmed booking page
        }
    }

    return (
        <main className="main">
            {/* Routes setup for handling different paths */}
            <Routes>
                <Route path="/" element={<Header />} /> {/* Default route to the Header component */}
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} /> {/* Route for booking with props passed down */}
                <Route path="/confirmed" element={<ConfirmedBooking/> } /> {/* Route for confirmed bookings */}
            </Routes>
        </main>
    );
}

export default Main; // Export the Main component for use in the application
