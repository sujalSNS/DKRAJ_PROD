import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const DiscountModal = () => {
    const [openM, setMOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedDiscount');
        if (!hasVisited) {
            setMOpen(true);
        }
    }, []);

    const handleClose = () => {
        setMOpen(false);
        localStorage.setItem('hasVisitedDiscount', 'true');
    };

    const handleSignup = () => {
        alert('Signup successful! You will receive a discount straight to your inbox.');
        handleClose();
    };

    return (
        openM && (
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-red-100 shadow-lg w-80 z-50 p-8">
                <div className="absolute top-0 right-0 m-4">
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Want 10% off your first order?</h2>
                    <p className="text-sm text-gray-600">
                        Sign up to get a discount straight to your inbox!
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <input type="email" placeholder="Enter your email" className="border bg-red-100  border-gray-700 p-2  outline-none border-t-0 border-l-0 border-r-0" />
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
