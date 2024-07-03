import React from 'react'
import { Link } from 'react-router-dom'

const images = [
    { name: "Rings", img: "assets/images/categories/rings.jpg" },
    { name: "Earrings", img: "assets/images/categories/earring.jpg" },
    { name: "Bracelets", img: "assets/images/categories/bracelet.jpg" },
    { name: "Bangles", img: "assets/images/categories/bangles.jpg" },
    { name: "Mangalsutras", img: "assets/images/categories/mangalsutra.jpg" },
    { name: "Nose Pins", img: "assets/images/categories/nosepin.jpg" },
    { name: "Head Jewellery", img: "assets/images/categories/headjewelry.jpg" },
    { name: "Pendant Sets", img: "assets/images/categories/pendantsSets.jpg" },
    { name: "Wedding Sets", img: "assets/images/categories/bridalSets.jpg" },
    { name: "Pendants", img: "assets/images/categories/pendants.jpg" },
    { name: "Anklets", img: "assets/images/categories/anklets.jpg" },
    { name: "Toe Rings", img: "assets/images/categories/toeRings.jpg" },
    { name: "Home Decors", img: "assets/images/categories/homeDecors.jpg" },
]



export const CategoriesList = () => {
    return (
        <>

            <div className="md:p-6 ">
                <div className="mb-10 text-center">
                    <Link to="/shop" className="md:text-3xl text-xl font-semibold text-gray-800">Explore Our Collections</Link>
                    <p className="mt-2 md:text-base text-sm text-gray-600">
                        Discover the Finest Jewelry Crafted with Excellence and Elegance
                    </p>
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-12"> */}
                <div className="flex flex-wrap md:gap-8 gap-6 mb-12  w-full md:mt-12 mt-8 md:px-6  items-center justify-center">
                    {images.map((category, index) => (
                        <Link to={`/shop/${category.name.toLowerCase()}`} key={index} className="bg-white flex flex-col items-center shadow-lg rounded-md  border overflow-hidden">
                            <img src={category.img} alt={category.name} className="md:w-full md:mx-10  md:h-40 w-full h-28 object-cover" />
                            <div className="py-2">
                                <h2 className="md:text-lg text-base font-semibold text-gray-800 text-center">{category.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>


        </>
    )
}
