import React from 'react'
import { Link } from 'react-router-dom'

const images = [
    { name: "Rings", img: "assets/images/ringCat.jpg" },
    { name: "Necklace", img: "assets/images/ringCat.jpg" },
    { name: "Earrings", img: "assets/images/ringCat.jpg" },
    { name: "Braclet", img: "assets/images/ringCat.jpg" },
    { name: "Rings", img: "assets/images/ringCat.jpg" },
    { name: "Necklace", img: "assets/images/ringCat.jpg" },
    { name: "Earrings", img: "assets/images/ringCat.jpg" },
    { name: "Braclet", img: "assets/images/ringCat.jpg" },
]

export const CategoriesList = () => {
    return (
        <>

            <div className="p-6">
            <div className="mb-10 text-center">
                    <Link to="/shop" className="text-3xl font-semibold text-gray-800">Explore Our Collections</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-12">
                    {images.map((category, index) => (
                        <Link to={`/shop/${category.name.toLowerCase()}`} key={index} className="bg-white flex flex-col items-center shadow-lg rounded-lg px-5 border overflow-hidden">
                            <img src={category.img} alt={category.name} className="w-48  h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 text-center">{category.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
                
            </div>


        </>
    )
}
