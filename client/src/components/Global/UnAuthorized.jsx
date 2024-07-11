import React from 'react'
import { Link } from 'react-router-dom'
import { setShowLoginModalTrue } from '../../slices/userSlice'
import { useDispatch } from 'react-redux'

export const UnAuthorized = () => {


    const dispatch = useDispatch()

    const handleOpenLoginModal = ()=>{
        dispatch(setShowLoginModalTrue())
    }

    return (
        <>
            <div className="flex flex-col items-center  min-h-screen bg-white">
                <div className='mb-10 mt-4 w-64'>
                    <img src="/assets/images/accessDenied.png" className='w-full h-full object-cover' alt="accessDenied.png" />
                </div>
                <h1 className="md:text-3xl text-2xl font-semibold mb-4 text-black">You are unauthorized</h1>
                <p className="text-gray-800 mb-6">Please login to access this page.</p>
                <div>
                    <button onClick={handleOpenLoginModal} className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}
