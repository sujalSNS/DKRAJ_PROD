import React from 'react';
import { IoSend } from 'react-icons/io5';

export const Newsletter = () => {
  return (
    <div className='bg-black md:px-0 sm:px-5 px-5 flex flex-col text-white justify-center py-12 gap-5 items-center'>
      <p className='font-bold text-6xl sm:text-5xl md:text-6xl text-center'>Newsletter</p>
      <p className='text-xl sm:text-xl text-gray-300 my-3 md:text-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='bg-white w-full max-w-md sm:max-w-lg md:max-w-xl flex justify-center items-center  overflow-hidden pr-0.5'>
        <input
          type="text"
          className="bg-white flex-grow text-black px-5 py-2 border-none outline-none"
          placeholder="Your email"
        />
        <button className='bg-black border border-black text-white hover:text-black hover:bg-white flex justify-center items-center py-2.5 w-1/5 '>
          <IoSend size={16} className='' />
        </button>
      </div>
    </div>
  );
}
