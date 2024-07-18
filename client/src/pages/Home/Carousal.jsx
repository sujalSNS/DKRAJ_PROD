import React, { useState, useEffect } from 'react';
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
            className="relative cursor-pointer w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full md:h-[36em]  2xl:h-[43em] h-auto"
                            onClick={() => handleSlideClick(index)}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={goToPrevSlide}
                    className="text-white rounded-full focus:outline-none"
                >
                    <FaChevronLeft size={26} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="text-white rounded-full focus:outline-none"
                >
                    <FaChevronRight size={26} />
                </button>
            </div>
        </div>
    );
};
