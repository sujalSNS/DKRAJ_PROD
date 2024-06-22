import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
   <>
    
    <div className='min-h-screen pt-24'>


        <div className='mt-12 flex flex-col justify-center  items-center'>
            <p className='text-center text-4xl font-semibold'>Your Bag</p>

            <div className="min-h-44">

            </div>


            
            <p>Your bag is currently empty.</p>
            <Link to="/shop" className='bg-black  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2' >Continue Shopping</Link>


            <div className='w-full md:px-12 px-4 pt-12'>
                <p className='text-left text-3xl  font-semibold'>Featured collection</p>
            </div>

        </div>



    </div>
   
   </>
  )
}
