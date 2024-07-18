import React from 'react';

export const PromotionLabel = ({ text }) => {
    return (
        // Container div with background color, hidden on mobile, flex on medium screens and larger
        <div className='bg-black md:flex hidden text-base font-light text-white py-2'>
            {/* Paragraph element for displaying the text centered */}
            <p className='text-center text-sm w-full'>{text}</p>
        </div>
    );
};
