import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ProductCarousal = ({ imgs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    }, [imgs]);

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length);
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % imgs.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imgs.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center">
                        <img src={`data:image/png;base64,${image}`} alt={`Slide ${index + 1}`} className="md:w-full w-11/12 md:h-[32em] h-[22em]" />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={goToPrevious} className="text-gray-600 rounded-full focus:outline-none">
                    <FaChevronLeft size={26} />
                </button>
                <button onClick={goToNext} className="text-gray-600 rounded-full focus:outline-none">
                    <FaChevronRight size={26} />
                </button>
            </div>
        </div>
    );
};
