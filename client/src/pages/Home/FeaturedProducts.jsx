import React from 'react'



const images = [
    {name: "Emrald Earring", img:'assets/images/featured1.jpg'},
    {name: "Pearl Ring", img:'assets/images/featured2.jpg'},
    {name: "Diamonf Necklace", img:'assets/images/featured3.jpg'}
];



export const FeaturedProducts = () => {
    return (
        <>
            <div className=' md:px-12 px-5 md:py-14 py-4'>
                <p className='text-center font-semibold md:text-3xl text-xl mb-2'>Featured Products</p>
                <p className="text-center md:text-base text-sm text-gray-600 mb-9">
                    Handpicked Selection of Our Most Popular Pieces
                </p>

                <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center md:gap-8 gap-5'>
                    {
                        images.map(e => (
                            <div key={e.name} className=' w-full flex flex-col items-center gap-3  shadow-md shadow-gray-200 p-4'>
                                <img src={e.img} alt={e.name} className='rounded-md' />
                                <p className='text-xl font-semibold'>{e.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
