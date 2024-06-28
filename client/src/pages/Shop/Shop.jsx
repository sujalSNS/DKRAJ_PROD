import React from 'react'
import { ProductCard } from './ProductCard'
import products from '../../data/products.json'




export const Shop = () => {

    const product = {
        productID: "411018PNDTAA005EA005",
        title: "Delicate Diamond Pendant",
        img: "/assets/images/pendant.jpg",
        price: 17500,
    }


    return (
        <>

            <div className='min-h-screen pt-32 pb-24'>

                <div className=' px-10 flex'>
                    <div className='w-1/4 py-5 sticky '>
                        <div className='bg-gray-200 font-bold px-4 py-3 text-2xl'>Filters</div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ipsam omnis adipisci doloribus earum suscipit cupiditate ducimus facere architecto esse ipsum ut alias labore porro, dolor magnam nihil repellendus eius?
                    </div>
                    <div className='w-3/4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-8'>
                        {
                            products.map((product) => (
                                <ProductCard product={product} />
                            ))
                        }
                    </div>

                </div>
            </div>

        </>
    )
}
