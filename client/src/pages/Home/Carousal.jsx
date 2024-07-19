import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const images = [
    '/assets/images/carousal1.jpg',
    '/assets/images/carousal2.jpg',
    '/assets/images/carousal3.jpg',
    '/assets/images/carousal4.jpg',
];

export const Carousel = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleSlideClick = (index) => {
        console.log(`Clicked slide ${index}`);
        navigate(`/carousel/${index}`);
    };

    const goToPrevSlide = () => {
        console.log('Going to previous slide');
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const goToNextSlide = () => {
        console.log('Going to next slide');
        setCurrentIndex((currentIndex + 1) % images.length);
    };


    return (
        <div
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div onClick={() => navigate(`/banner/${index + 1}`)} key={index} className="w-full flex-shrink-0 cursor-pointer">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full md:h-[36em] 2xl:h-[43em] h-auto"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={goToPrevSlide}
                className="text-white rounded-full absolute top-1/2 left-3 transform -translate-y-1/2 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <FaChevronLeft size={26} />
            </button>
            <button
                onClick={goToNextSlide}
                className="text-white rounded-full absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <FaChevronRight size={26} />
            </button>
        </div>
    );
};
