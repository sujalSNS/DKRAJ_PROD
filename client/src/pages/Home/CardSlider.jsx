// Carousel.js
import React from 'react';
import Slider from 'react-slick';

// Import Slick CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
    

    <Slider {...settings}>
      <div className='flex justify-center items-center border border-black' >
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" className='mx-auto' />
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" className='mx-auto' />
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" className='mx-auto' />
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://via.placeholder.com/800x400" alt="Slide 4" className='mx-auto' />
      </div>
    </Slider>
   

  );
};

