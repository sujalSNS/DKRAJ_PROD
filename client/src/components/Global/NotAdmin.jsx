import React from 'react'
import { Link } from 'react-router-dom'

export const NotAdmin = () => {


    return (
        <>
            <div className="flex flex-col items-center  min-h-screen bg-white">
                <div className='mb-10 mt-4 w-64'>
                    <img src="/assets/images/accessDenied.png" className='w-full h-full object-cover' alt="accessDenied.png" />
                </div>
                <h1 className="md:text-3xl text-2xl font-semibold mb-4 text-black">You don't have access to this page.</h1>
                <div className='mt-4'>
                    <Link to="/" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                        Home
                    </Link>
                </div>
            </div>
        </>
    )
}
