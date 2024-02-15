import React from "react";
import { useState } from "react"; // Import useState hook for state management within the component

// Functional component BookingForm accepting props
const BookingForm = (props) => {
  // State variables for form fields
  const [occasion, setOccasion] = useState(""); // Tracks the selected occasion
  const [guests, setGuests] = useState(""); // Tracks the number of guests
  const [date, setDate] = useState(""); // Tracks the selected date
  const [times, setTimes] = useState(""); // Tracks the selected time

  // Handles form submission
  const handleSumbit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    props.submitForm(e); // Calls the submitForm function passed as a prop
  };

  // Handles change in the date input
  const handleChange = (e) => {
    setDate(e); // Updates the date state
    props.dispatch(e); // Dispatches the event value to a function passed as a prop
  }

  return (
    <header>
      <section>
        {/* Form element with onSubmit handler */}
        <form onSubmit={handleSumbit}>
          {/* Fieldset used for grouping related form elements */}
          <fieldset className="formField">
            {/* Date selection */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              {/* Date input field */}
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            {/* Time selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              {/* Time select field, populated dynamically from props */}
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
                {/* Map through available times and render options */}
                {props.availableTimes.availableTimes.map(availableTimes => <option key={availableTimes}>{availableTimes}</option>)}
              </select>
            </div>
            {/* Number of guests input */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              {/* Number input for guest count */}
              <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder="0" max="10" required/>
            </div>
            {/* Occasion selection */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              {/* Occasion select field */}
              <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option value="Birthday">Normal</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Anniversary">Weeding</option>
              </select>
            </div>
            {/* Submit button */}
            <div className="btnReceive">
              {/* Submit input with aria-label for accessibility */}
              <input aria-label="Make Your Reservation" type="submit" value="Make Your Reservation"/>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
