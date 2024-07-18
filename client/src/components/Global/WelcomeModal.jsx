import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WelcomeModal = () => {
    const [openM, setMOpen] = useState(false);
    const [country, setCountry] = useState('');
    const modalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            fetchCountry();
        }

        const handleClickOutside = (event) => {
            if (event.target.classList.contains('modal-backdrop')) {
                setMOpen(false);
            }
        };

        const handleEscapePress = (event) => {
            if (event.key === 'Escape') {
                setMOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapePress);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapePress);
        };
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
            <div className="fixed inset-0 flex items-center justify-center z-50 modal-backdrop bg-black bg-opacity-0">
                <div
                    // md:w-2/6 min-h-1/2 w-72 

                    ref={modalRef}
                    className="bg-white rounded-xl shadow-lg shadow-gray-600 
                     md:w-2/6 min-h-1/2 w-72 
                    p-8 md:p-12 
                    relative"
                >
                    <div className="flex justify-between items-center border-b border-gray-200 pb-5 mb-2">
                        <h2 className="md:text-4xl text-lg font-semibold">Welcome to DKRAJ</h2>
                        <button onClick={handleClose} className="text-gray-500 absolute top-7 right-7 hover:text-gray-800">
                            <AiOutlineClose size={20} />
                        </button>
                    </div>
                    <div className="mb-4 2xl:mt-12 xl:mt-3 mt-6">
                        <p className="md:text-xl text-sm text-gray-600">
                            You are visiting us from {country}. Would you like to:
                        </p>
                    </div>
                    <div className="flex flex-col md:space-y-4 space-y-2 2xl:mt-12 xl:mt-3 mt-6">
                        <button
                            className="bg-gray-950 text-white px-4 py-3 md:text-lg text-sm rounded-sm"
                            onClick={handleDiscoverClick}
                        >
                            Shop 92.5 Sterling Silver Jewelry
                        </button>
                        <button
                            className="text-black px-4 py-3 md:text-lg text-sm rounded-sm border border-gray-400"
                            onClick={handleShopClick}
                        >
                            Discover Gold, Diamond and Polki Collection
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};
