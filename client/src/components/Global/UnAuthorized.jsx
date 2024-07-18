import React from 'react'
import { Link } from 'react-router-dom'
import { setShowLoginModalTrue } from '../../slices/userSlice' // Importing action creator
import { useDispatch } from 'react-redux' // Importing useDispatch hook from react-redux

// Define the UnAuthorized component
export const UnAuthorized = () => {
    const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

    // Function to handle opening the login modal
    const handleOpenLoginModal = () => {
        dispatch(setShowLoginModalTrue()); // Dispatching action to set showLoginModal to true
    }

    return (
        <>
            {/* Container div for centering content and setting minimum height */}
            <div className="flex flex-col items-center min-h-screen bg-white">
                {/* Image container with margin for spacing */}
                <div className='mb-10 mt-4 w-64'>
                    {/* Access denied image */}
                    <img src="/assets/images/accessDenied.png" className='w-full h-full object-cover' alt="accessDenied.png" />
                </div>
                {/* Heading indicating unauthorized access */}
                <h1 className="md:text-3xl text-2xl font-semibold mb-4 text-black">You are unauthorized</h1>
                {/* Message prompting to login */}
                <p className="text-gray-800 mb-6">Please login to access this page.</p>
                {/* Button to open the login modal */}
                <div>
                    <button onClick={handleOpenLoginModal} className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}
