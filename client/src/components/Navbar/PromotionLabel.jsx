import React from 'react'

export const PromotionLabel = ({text}) => {
    return (
        <div className='bg-black md:flex hidden text-base font-light text-white  py-2'>
            <p className='text-center w-full'>{text}</p>
        </div>
    )
}
