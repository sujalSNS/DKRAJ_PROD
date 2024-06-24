import React from 'react'
import { Link } from 'react-router-dom';


export const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className='mb-4'>
        <p className="text-5xl font-bold text-black mb-2">Order successfull</p>
        </div>
        <p className="md:text-2xl text-base md:px-0 px-6 text-black mb-6">Order has been created successfully. Your order number is 12398126391623</p>
        <Link to="/shop" className='bg-black  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2'>
          Shop more jewelleries
        </Link>
      </div>
    </div>
  )
}
