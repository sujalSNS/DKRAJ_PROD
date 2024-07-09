import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { name: "Bangle", img: "assets/images/bangle.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Braclet", img: "assets/images/braclet.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Earring", img: "assets/images/earring.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Gold Ring", img: "assets/images/goldRing.jpg", hoverImg: "assets/images/modalImg.jpg" },
    { name: "Pendant", img: "assets/images/pendant.jpg", hoverImg: "assets/images/modalImg.jpg" },
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



export const Trending = () => {
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
                <p  className="md:text-3xl text-xl font-semibold text-gray-800">Trending</p>
                <p className="mt-2 md:text-base text-sm text-gray-600">
                    Discover the some of our trending jewelleries from dkraj jewelleries
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
