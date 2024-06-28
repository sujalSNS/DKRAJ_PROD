import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const images = [
    '/assets/images/carousal1.jpg',
    '/assets/images/carousal2.jpg',
    '/assets/images/carousal3.jpg',
    '/assets/images/carousal4.jpg',
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
             
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 cursor-pointer">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full  md:h-[34em] h-auto" />
                     </div>
                ))}
         
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                    className=" text-white  rounded-full focus:outline-none"
                >
                    <FaChevronLeft size={26} />
                </button>
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    className=" text-white  rounded-full focus:outline-none"
                >
                    <FaChevronRight size={26} />

                </button>
            </div>
        </div>
    );
};
