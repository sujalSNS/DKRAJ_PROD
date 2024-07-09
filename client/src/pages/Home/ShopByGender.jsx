import React from 'react'
import { Link } from 'react-router-dom'

export const ShopByGender = () => {
    return (
        <>

            <div className='py-12'>
                <div className='py-3 text-center'>
                    <p className='text-3xl font-semibold'>Shop By Gender</p>
                    <p>First-class jewelry for first-class Men, Women & Children.</p>

                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-24 gap-8 mt-5'>
                    <div className='border border-gray-400 shadow shadow-gray-200'>

                        <div>
                            <img src="/assets/images/man.webp" alt="man.webp" />
                        </div>
                        <div className='py-4 px-3  flex justify-between items-center'>
                        <span className='underline underline-offset-4'>MEN</span> <Link className=' bg-black text-white 
                            text-sm hover:bg-white hover:text-black px-4 py-2 border hover:border-black'>Explore More</Link>
                        </div>
                    </div>
                    <div className='border border-gray-400 shadow shadow-gray-200'>

                        <div>
                            <img src="/assets/images/woman.webp" alt="woman.webp" />
                        </div>
                        <div className='py-4 px-3 flex justify-between items-center'>
                            <span className='underline underline-offset-4'>WOMEN</span> <Link className=' bg-black text-white 
                            text-sm hover:bg-white hover:text-black px-4 py-2 border hover:border-black'>Explore More</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
