import React from "react";
import recipes from "../recipes"; // Importing recipes array from a local file
import Swal from "sweetalert2"; // Importing SweetAlert2 for enhanced alert dialogs

const Menu = () => {
    // Function to handle order button clicks for each recipe
    const handleOrder = (id) => {
        console.log(id); // Logs the ID of the recipe ordered for debugging or tracking

        // Creating a SweetAlert2 instance with custom button classes
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success', // Class for the confirm button
                cancelButton: 'btn btn-danger' // Class for the cancel button, if used
            },
            buttonsStyling: false // Disabling default styling to use custom classes
        });
        
        // Displaying a warning dialog to confirm the order
        swalWithBootstrapButtons.fire({
            title: 'Do you want to confirm order?', // Dialog title
            text: "You won't be able to revert this!", // Additional text
            icon: 'warning', // Icon displayed on the dialog
            showCancelButton: false, // No cancel button shown
            confirmButtonText: 'Yes, order it!', // Text on the confirm button
            reverseButtons: true // Reverses the order of buttons, placing confirm on the left
        }).then((result) => {
            if (result.isConfirmed) {
                // If the user confirms, show a success dialog
                swalWithBootstrapButtons.fire(
                    'Ordered!',
                    'Your order has been confirmed.',
                    'success'
                )
            } 
        });
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week's specials: A taste of Italy in every bite.</h2> {/* Header for the menu */}
            </div>
            <div className="cards">
                {/* Mapping through recipes array to display each recipe */}
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="menu-items">
                        {/* Recipe image */}
                        <img src={recipe.image} alt={recipe.title} /> {/* Added alt text for accessibility */}
                        <div className="menu-content">
                            {/* Recipe title and price */}
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>${recipe.price}</p>
                            </div>
                            {/* Recipe description */}
                            <p>{recipe.description}</p>
                            {/* Order button for each recipe */}
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
