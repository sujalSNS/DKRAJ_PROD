import React from 'react'
import { ProductCard } from './ProductCard'
import products from '../../data/products.json'

export const Shop = () => {

    const priceRanges = [
        { value: "10000", label: "Below Rs. 10,000" },
        { value: "10000-20000", label: "Rs. 10,000 - Rs. 20,000" },
        { value: "20000-30000", label: "Rs. 20,000 - Rs. 30,000" },
        { value: "30000-40000", label: "Rs. 30,000 - Rs. 40,000" },
        { value: "40000-50000", label: "Rs. 40,000 - Rs. 50,000" },
        { value: "50000", label: "Rs. 50,000 and Above" }
    ];
    const types = [
        { value: "Bangles", label: "Bangles" },
        { value: "Bracelet", label: "Bracelet" },
        { value: "headJewelry", label: "Head Jewelry" },
        { value: "earring", label: "Earring" },
        { value: "bridalSets", label: "Bridal Sets" },
        { value: "rings", label: "Rings" },
        { value: "mangalsutra", label: "Mangalsutra" },
        { value: "necklace", label: "Necklace" },
        { value: "nosePins", label: "Nose pins" },
        { value: "pendants", label: "Pendants" },
    ];
    const sizes = [
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
        { value: 8, label: "8" }
    ];

    const material = [
        { value: "platinum", label: "Platinum" },
        { value: "gold", label: "Gold" },
        { value: "diamond", label: "Diamond" },
        { value: "gemstone", label: "Gemstone" }
    ];

    const shopFor = [
        { value: "men", label: "Men" },
        { value: "women", label: "Women" },
        { value: "kids", label: "Kids" }
    ];

    return (
        <div className='min-h-screen pt-32 pb-24 flex'>
            <div className='w-1/4 py-5 h-full md:flex flex-col hidden'>
                    <div className='bg-gray-300   font-bold px-4 py-3 text-2xl rounded-t-lg'>Filters</div>
                <div className='sticky md:flex hidden flex-col top-32 bg-gray-100 rounded-lg overflow-y-auto' style={{ maxHeight: 'calc(90vh - 8rem)' }}>
                    <div className='py-4 px-5 space-y-4'>
                        <div>
                            <p className='font-semibold text-lg'>Price</p>
                            <div className='flex flex-col space-y-1'>
                                {priceRanges.map((e) => (
                                    <label key={e.value} className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-blue-500 rounded' />
                                        <span className='ml-2'>{e.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-lg'>Type</p>
                            <div className='flex flex-col space-y-1'>
                                {types.map((e) => (
                                    <label key={e.value} className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-blue-500 rounded' />
                                        <span className='ml-2'>{e.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-lg'>Size</p>
                            <div className='flex flex-col space-y-1'>
                                {sizes.map((e) => (
                                    <label key={e.value} className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-blue-500 rounded' />
                                        <span className='ml-2'>{e.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-lg'>Material</p>
                            <div className='flex flex-col space-y-1'>
                                {material.map((e) => (
                                    <label key={e.value} className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-blue-500 rounded' />
                                        <span className='ml-2'>{e.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-lg'>Shop For</p>
                            <div className='flex flex-col space-y-1'>
                                {shopFor.map((e) => (
                                    <label key={e.value} className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-blue-500 rounded' />
                                        <span className='ml-2'>{e.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-3/4 md:pl-8 overflow-y-auto h-screen pt-5'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                    {products.map((product) => (
                        <ProductCard key={product.productID} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
