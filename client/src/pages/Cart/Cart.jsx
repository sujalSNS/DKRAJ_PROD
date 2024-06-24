import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
    return (
        <>

            <div className='min-h-screen pt-24'>


                <div className='mt-12 flex flex-col justify-center  items-center'>
                    <p className='text-center text-4xl font-semibold'>Your Bag</p>

                    <div className="min-h-44 flex md:flex-row gap-5 w-full md:px-10 px-5 py-5 flex-col md:justify-between justify-center">

                        <div className='border md:w-4/6 w-full'>
                        
                        </div>
                        <div className=' md:w-2/6 w-full h-80 bg-gray-100 md:p-8 p-5 '>
                            <p className='text-black font-medium'>Order Summary</p>
                            <div className='grid grid-cols-2 text-sm gap-3 py-4'>
                                <div>Subtotal</div>
                                <div className='text-right '>₹0.00</div>
                                <div>Shipping Fee</div>
                                <div className='text-right '>₹0.00</div>
                                <div>Shipping Fee</div>
                                <div className='text-right '>₹0.00</div>

                            </div>
                            <div className='grid grid-cols-2 text-sm gap-3 border-t border-black py-4'>
                                <div>Estimated Total</div>
                                <div className='text-right '>₹0.00</div>
                            </div>
                            <div>
                                <button type='submit' className='bg-black w-full mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-3 py-2'>CHECKOUT</button>
                            </div>
                        </div>

                    </div>



                    <p>Your bag is currently empty.</p>
                    <Link to="/shop" className='bg-black  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2' >Continue Shopping</Link>


                    <div className='w-full md:px-12 px-4 pt-12 pb-20'>
                        <p className='text-left text-3xl  font-semibold'>Featured collection</p>
                    </div>

                </div>



            </div>

        </>
    )
}
