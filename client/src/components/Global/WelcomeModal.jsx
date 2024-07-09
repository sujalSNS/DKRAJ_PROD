import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

export const WelcomeModal = () => {
    const [openM, setMOpen] = useState(false);
    const [country, setCountry] = useState('');
    const navigate = useNavigate(); // Initialize useHistory

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            fetchCountry();
        }
    }, []);

    const fetchCountry = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json'); 
            setCountry(response.data.country_name);
            setMOpen(true);
        } catch (error) {
            console.error('Error fetching country:', error);
        }
    };

    const handleClose = () => {
        setMOpen(false);
        localStorage.setItem('hasVisited', 'true'); 
    };

    const handleDiscoverClick = () => {
        navigate('/discover');
        handleClose(); 
    };

    const handleShopClick = () => {
        navigate('/shop'); 
        handleClose(); 
    };

    return (
        openM && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-80 z-50 p-8">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                    <h2 className="text-lg font-semibold">Welcome to DKRAJ</h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        You are visiting us from {country}. Would you like to:
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <button
                        className="bg-gray-950 text-white px-4 py-2 text-sm rounded-sm"
                        onClick={handleDiscoverClick} // Use handleDiscoverClick for navigation and closing
                    >
                        Shop 92.5 Sterling Silver Jewelry
                    </button>
                    <button
                        className="text-black px-4 py-2 text-sm rounded-sm border border-gray-400"
                        onClick={handleShopClick} // Use handleShopClick for navigation and closing
                    >
                       Discover Gold, Diamond and Polki Collection
                    </button>
                </div>
            </div>
        )
    );
};

