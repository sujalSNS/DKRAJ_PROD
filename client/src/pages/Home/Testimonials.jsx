import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Marquee from "react-fast-marquee";


const testimonials = [
  {
    text: "Absolutely love my new necklace! It's even more beautiful in person. The craftsmanship is impeccable, and it adds a perfect touch to any outfit. Highly recommend!",
    user: "Sanjana Saxena",
  },
  {
    text: "The earrings are simply gorgeous! They are lightweight and comfortable to wear all day. The sparkle is incredible, and they really catch the light beautifully. So happy I bought them!",
    user: "Mansi Agarwal",
  },
  {
    text: "The quality of the bracelet is outstanding. It's so well-made and durable. I've received so many compliments from friends and family, and it has quickly become my favorite piece of jewelry!",
    user: "Riddhima Taneja",
  },
  {
    text: "This ring is stunning and fits perfectly. The design is unique and elegant. Couldn't be happier with my purchase. It was a great experience from start to finish!",
    user: "Ragini Vadra",
  },
  {
    text: "I'm in love with my new anklet. It's delicate yet sturdy, and it adds a lovely charm to my summer outfits. The customer service was also exceptional. Thank you!",
    user: "Annapurni Subramaniyam",
  },
];

export const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 px-12">
      <Marquee  speed={50} autoFill={true} >

        {testimonials.slice(0, 1).map((testimonial, index) => (
          <div key={index} className="w-9/12  my-12 md:px-12 px-4 py-10 bg-white-100  rounded-lg shadow-lg shadow-gray-300 ">
            <div className="  text-center">
              <div className="flex justify-center items-center mb-4">
                <FaInstagram size={25} className="text-gray-800 text-2xl" />
                <h3 className="ml-2 text-xl font-semibold">Instagram</h3>
              </div>
              <p className="text-gray-700 mb-2 md:text-xl text-base">{testimonial.text}</p>
              <p className="text-gray-500">- {testimonial.user}</p>
            </div>
          </div>
        ))}

      </Marquee>
    </div>
  );
};
