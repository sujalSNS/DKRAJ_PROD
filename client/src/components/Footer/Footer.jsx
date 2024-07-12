import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineLocationOn, MdOutlineLocalPhone, MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-start gap-14 items-center md:py-8 py-10 md:px-12 px-8'>
        <div className='md:w-1/3 w-full'>
          <p className="font-bold text-3xl">DKRAJ</p>
          <p className='text-sm mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit natus mollitia omnis soluta sit fugiat laboriosam vitae, quod, velit ut ex quia alias. Nobis, quis tempora! Repudiandae, cupiditate suscipit?
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link className='bg-black p-2 rounded-full'>
              <FaFacebook size={24} className=" text-white " />
            </Link>
            <Link className='bg-black p-2 rounded-full'>
              <FaInstagram size={24} className=" text-white " />
            </Link>
          </div>
        </div>
        <div className='w-1/3 md:flex hidden flex-col'>
          <p className="font-bold text-xl ">Useful Links</p>
          <div className='flex gap-4 mt-4'>
            <ul className='flex flex-col gap-1.5'>
              <li>Delivery Information</li>
              <li>About Dkraj</li>
              <li>Accessories</li>
              <li>Returns & Cancellations</li>
            </ul>
            <ul className='flex flex-col gap-1.5'>
              <li>Returns</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <p className="font-bold text-xl ">Contact</p>
          <div className='flex flex-col gap-4 mt-5'>
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center justify-left gap-2'>
                <MdOutlineLocationOn size={24} />
                <span>New Delhi, 794309</span>
              </li>
              <li className='flex items-center justify-left gap-2'>
                <MdOutlineLocalPhone size={24} />
                <span>+91 7883 755 494</span>
              </li>
              <li className='flex items-center justify-left gap-2'>
                <MdMailOutline size={24} />
                <span>contact@dkraj.com</span>
              </li>
            </ul>
            <img src="/assets/images/paymentOptions.png" className='h-5 w-1/2' alt="paymentOptions.png" />
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-gray-200 text-gray-700 md:text-sm text-xs md:xp-0 px-4">
        &copy; 2023 DKRAJ JEWELS. All Rights Reserved by DKRAJ India. Powered and secured by <Link className='font-semibold text-black' to="https://www.snsincmedia.com/" target='_blank'>SnS Inc.</Link>.
      </div>
    </>
  );
};
