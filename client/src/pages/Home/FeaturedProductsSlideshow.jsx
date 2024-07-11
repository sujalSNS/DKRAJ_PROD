import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bangle from "/assets/images/bangle.jpg";
import braclet from "/assets/images/braclet.jpg";
import earring from "/assets/images/earring.jpg";



const images = [bangle, braclet, earring,bangle, braclet, earring];

export const FeaturedProductsSlideshow = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaChevronRight size={27}/>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaChevronLeft size={27}/>
            </div>
        );
    };


    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };



    return (
        <>

            <div className="py-12 md:px-20 px-8 md:flex hidden flex-col">

                <div>
                <p className='text-center font-semibold md:text-3xl text-xl mb-2'>Featured Products</p>
                <p className="text-center md:text-base text-sm text-gray-600 ">
                    Handpicked Selection of Our Most Featured Pieces
                </p>
                </div>
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={`${idx === imageIndex ? "slide activeSlide" : "slide"}  `}>
                            <div className="shadow-md shadow-gray-100">

                            <img src={img} alt={img} className={` ${idx === imageIndex ? "" : ""} `} />
                            <p className="-translate-y-16 px-6 py-4 md:text-3xl bg-opacity-35 absolute w-full bg-black text-white font-medium">Bangle</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    );
};

