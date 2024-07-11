import React from 'react'



const images = [
    {name: "Emrald Earring", img:'assets/images/featured1.jpg'},
    {name: "Pearl Ring", img:'assets/images/featured2.jpg'},
    {name: "Diamond Necklace", img:'assets/images/featured3.jpg'}
];



export const PopularProducts = () => {
    return (
        <>
            <div className=' md:px-12 px-5 md:py-14 py-4'>
                <p className='text-center font-semibold md:text-3xl text-xl mb-2'>Popular Products</p>
                <p className="text-center md:text-base text-sm text-gray-600 mb-9">
                    Handpicked Selection of Our Most Popular Pieces
                </p>

                <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center md:gap-8 gap-5'>
                    {
                        images.map(e => (
                            <div key={e.name} className=' w-full flex flex-col items-center shadow-md shadow-gray-200 p-4'>
                                <img src={e.img} alt={e.name} className='rounded-md' />
                                <p className='text-xl font-semibold mt-3'>{e.name}</p>
                                <p className='text-sm text-center mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam consequatur dicta doloribus quos provident non voluptatem incidunt molestias velit</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
