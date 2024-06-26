import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { HiShoppingBag, HiMiniBars3, HiUser } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";

import { Drawer, IconButton } from '@mui/material';
import { PromotionLabel } from './PromotionLabel';


export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };




  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/shop/${searchValue}`);
      setSearchValue("")
    }
  };

  const login = false;


  return (
    <>
      <nav className='fixed md:h-32 z-10 w-full bg-white '>
        <PromotionLabel text={"GET RS.1000 CASHBACK ON PURCHASE OF RS.6000 | GET RS.2000 CASHBACK ON PURCHASE OF RS.10000"} />
        
        <div className='flex justify-between items-center pl-3 md:gap-0 md:px-16 md:pt-6 pt-6 pb-4'>
          <div className='md:flex hidden justify-center items-center gap-3'>
            <span>EN</span>
            <div className="flex items-center border border-gray-400 p-0.5 pr-1 bg-white">
              <input
                type="text"
                className="border-none w-40 px-2 outline-none"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
                onKeyDown={handleSearchKeyDown}
              />
              <IoMdSearch className="text-gray-400" />
            </div>
          </div>

          <div className='md:hidden flex'>
            <IconButton onClick={toggleDrawer(true)}>
              <HiMiniBars3 size={29} />
            </IconButton>
          </div>

          <div className='flex justify-center items-center md:mr-16 md:ml-0 ml-10'>
            <Link to="/" className='font-bold md:text-4xl text-xl text-center'>DKRAJ JEWELS</Link>
          </div>

          <div className='flex justify-center items-center gap-6 mr-4'>
            <span className='flex'>
              {
                login ?
                  <Link to="/profile" className='animated-underline ' ><HiUser size={25} className="text-gray-500 " /> </Link> :
                  <span className='md:flex hidden'>

                    <Link to="/login" className='font-semibold  text-sm animated-underline mt-1.5'>SIGN IN</Link>
                  </span>

              }
            </span>
            <Link to="/wishlist" className='animated-underline '>
              <MdFavorite size={26} className="text-gray-500 " />
            </Link>
            <Link to="/cart" className='animated-underline '>
              <HiShoppingBag size={26} className="text-gray-500 " />
            </Link>

          </div>
        </div>
      </nav>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        disableScrollLock={true}
        sx={{ '& .MuiDrawer-paper': { width: '240px' } }}
      >
        <div className='flex flex-col gap-10 justify-center pl-8  mt-12'>
          <Link onClick={toggleDrawer(false)} to="/" className="text-xl underline  underline-offset-8 ">Home</Link>
          <Link onClick={toggleDrawer(false)} to="/profile" className="text-xl underline underline-offset-8 ">Profile</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/jewelry" className="text-xl underline underline-offset-8">Jewelry</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/watches" className="text-xl underline underline-offset-8 ">Watches</Link>
          <Link onClick={toggleDrawer(false)} to="/contact" className="text-xl underline underline-offset-8 ">Contact</Link>

          {login ? <button onClick={toggleDrawer(false)} className="text-xl text-left w-full underline underline-offset-8 ">
            Logout
          </button> : <Link onClick={toggleDrawer(false)} to="/login" className="text-xl underline underline-offset-8 ">Sign In</Link>}


        </div>
      </Drawer>
    </>
  );
};
