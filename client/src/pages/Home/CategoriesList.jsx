import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [ 
    { name: "Rings", img: "assets/images/categories/rings.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Earrings", img: "assets/images/categories/earring.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Bracelets", img: "assets/images/categories/bracelet.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Bangles", img: "assets/images/categories/bangles.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Mangalsutras", img: "assets/images/categories/mangalsutra.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Nose Pins", img: "assets/images/categories/nosepin.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Head Jewelleries", img: "assets/images/categories/headjewelry.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Pendant Sets", img: "assets/images/categories/pendantsSets.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Wedding Sets", img: "assets/images/categories/bridalSets.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Pendants", img: "assets/images/categories/pendants.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Anklets", img: "assets/images/categories/anklets.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Toe Rings", img: "assets/images/categories/toeRings.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Home Decors", img: "assets/images/categories/homeDecors.jpg", hoverImg: "assets/images/modalImg.jpg" },
];

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="slick-next cursor-pointer   absolute top-1/2 transform -translate-y-1/2 right-4 z-10"
            onClick={onClick}
        >
            
        </div>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="slick-prev cursor-pointer  absolute top-1/2 transform -translate-y-1/2 left-4 z-10"
            onClick={onClick}
        >
            
        </div>
    );
};



export const CategoriesList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="md:p-6">
            <div className="md:mb-10 mb-5 md:pl-8 pl-4">
                <p className="md:text-3xl text-xl font-semibold text-gray-800">Explore Our Collections</p>
                <p className="mt-2 md:text-base text-sm text-gray-600">
                    Discover the Finest Jewelry Crafted with Excellence and Elegance
                </p>
            </div>
            <Slider {...settings} className="relative">
                {images.map((category, index) => (
                    <div key={index} className="px-2 ">
                        <Link
                            to={`/shop/${category.name.toLowerCase()}`}
                            className="bg-white flex relative flex-col items-center  shadow-lg   overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={hoveredIndex === index ? category.hoverImg : category.img}
                                alt={category.name}
                                className="md:w-full md:mx-10 md:h-64 w-full h-44 object-cover"
                            />
                            <div className="py-2 absolute bottom-0 bg-black w-full pl-4 bg-opacity-40">
                                <h2 className="md:text-lg text-base  text-white ">{category.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
