import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon from react-icons
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom for navigation

// Define the DiscountModal component
export const DiscountModal = () => {
    // State variable to track whether the modal is open
    const [openM, setMOpen] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    // useEffect hook to check if the user has visited the discount modal before
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedDiscount');
        if (!hasVisited) {
            setMOpen(true); // Open the modal if it has not been visited before
        }
    }, []);

    // Function to handle the closing of the modal
    const handleClose = () => {
        setMOpen(false); // Close the modal
        localStorage.setItem('hasVisitedDiscount', 'true'); // Save the visit in localStorage
    };

    // Function to handle the signup action
    const handleSignup = () => {
        alert('Signup successful! You will receive a discount straight to your inbox.');
        handleClose(); // Close the modal after signup
    };

    return (
        openM && (
            <div className="fixed md:top-1/2 top-3/4 right-8 transform -translate-y-1/2 bg-red-100 shadow-lg w-80 z-50 p-8">
                {/* Close button */}
                <div className="absolute top-0 right-0 m-4">
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                {/* Modal content */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Want 10% off your first order?</h2>
                    <p className="text-sm text-gray-600">
                        Sign up to get a discount straight to your inbox!
                    </p>
                </div>
                {/* Input and submit button */}
                <div className="flex flex-col space-y-2">
                    <input type="email" placeholder="Enter your email" className="border bg-red-100 border-gray-700 p-2 outline-none border-t-0 border-l-0 border-r-0" />
                    <button
                        className="bg-gray-950 text-white px-4 py-2 text-sm rounded-sm"
                        onClick={handleSignup}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    );
};
