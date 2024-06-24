import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className='mb-4'>
        <p className="text-8xl font-bold text-black mb-2">404</p>
        <p className='text-2xl'>Page not found</p>
        </div>
        <p className="md:text-2xl text-base md:px-0 px-6 text-black mb-6">Looks like the page you are looking for doesn't exist.</p>
        <Link to="/" className='bg-black  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2'>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};
