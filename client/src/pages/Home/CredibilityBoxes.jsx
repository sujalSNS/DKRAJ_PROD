import React from 'react'

export const CredibilityBoxes = () => {
    return (
        <>

            <div className='bg-gray-100 md:flex hidden flex-col  items-center py-16 '>

                <div className='flex justify-center items-center gap-96 pr-72'>

                    <div className='w-44 h-32 bg-gray-400 rounded-md'></div>
                    <div className='w-44 h-32 bg-gray-400 rounded-md'></div>

                </div>
                <div className='flex justify-center items-center gap-96 pl-72'>

                    <div className='w-44 h-32 bg-gray-400 rounded-md'></div>
                    <div className='w-44 h-32 bg-gray-400 rounded-md'></div>

                </div>

            </div>
            <div className='bg-gray-100 md:hidden flex flex-col gap-8 items-center py-12 px-4'>

                <div className='flex justify-center items-center  pl-44'>

                    <div className='w-36 h-32 bg-gray-400 rounded-md'></div>


                </div>
                <div className='flex justify-center items-center gap-96 pr-44'>

                    <div className='w-36 h-32 bg-gray-400 rounded-md'></div>

                </div>
                <div className='flex justify-center items-center  pl-44'>

                    <div className='w-36 h-32 bg-gray-400 rounded-md'></div>


                </div>
                <div className='flex justify-center items-center gap-96 pr-44'>

                    <div className='w-36 h-32 bg-gray-400 rounded-md'></div>

                </div>

            </div>

        </>
    )
}
