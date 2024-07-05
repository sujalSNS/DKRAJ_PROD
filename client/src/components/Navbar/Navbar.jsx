import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { HiShoppingBag, HiMiniBars3, HiUser } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import { Drawer, IconButton, Modal, Box, Button, Checkbox, Menu, MenuItem } from '@mui/material';
import { PromotionLabel } from './PromotionLabel';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for controlling login modal
  const navigate = useNavigate();


  const [userData, setUserData] = useState({});

  const login = false

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/shop/${searchValue}`);
      setSearchValue("");
    }
  };

  const handleMenuOpen = (event) => {
    if (!login) {
      // Open the login modal instead of navigating to "/login"
      setShowLoginModal(true);
      return;
    }

    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = () => {
    // Handle login functionality here
    // After successful login, you can close the modal and set login state
    setShowLoginModal(false);
    // Optionally update login state or perform other actions
  };

  return (
    <>
      <nav className='fixed z-10 w-full bg-white'>
        <PromotionLabel text={"GET RS.1000 CASHBACK ON PURCHASE OF RS.6000 | GET RS.2000 CASHBACK ON PURCHASE OF RS.10000"} />

        <div className='flex justify-between items-center pl-3 md:gap-0 md:px-16 md:pt-0 pt-4 md:pb-1 pb-1'>
          <div className='md:flex hidden justify-center items-center gap-3'>
            <span>EN</span>
            <div className="flex items-center border border-gray-400 p-0.5 pr-1 bg-white">
              <input
                type="text"
                className="border-none w-40 px-2 outline-none"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
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

          <div className='flex justify-center items-center md:mr-16 md:ml-0 ml-4'>
            <Link to="/" className='font-bold md:text-4xl text-xl text-center h-12 md:h-20 flex justify-center items-center pb-3'>
              <img src="/assets/images/dkrajLogoVariant1Black.png" alt="DKRAJ JEWELS" className='object-cover h-[2em]' />
            </Link>
          </div>

          <div className='md:flex hidden justify-center items-center gap-6 mr-4'>
            <button onClick={handleMenuOpen} className='animated-underline'>
              <HiUser size={25} className="text-gray-500" />
            </button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              disableScrollLock={true}
              className='pt-1'
            >
              <MenuItem onClick={() => {
                navigate("/profile");
                handleMenuClose();
              }}>
                <p className='font-semibold'>Profile</p>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <p className='font-semibold'>Logout</p>
              </MenuItem>
            </Menu>

            <Link to="/wishlist" className='animated-underline'>
              <MdFavorite size={26} className="text-gray-500" />
            </Link>
            <Link to="/cart" className='animated-underline'>
              <HiShoppingBag size={26} className="text-gray-500" />
            </Link>
          </div>

          <div className='md:hidden flex justify-center items-center gap-5 mr-4'>
            <button onClick={handleMenuOpen} className='animated-underline'>
              <HiUser size={25} className="text-gray-500" />
            </button>

            <Link to="/wishlist" className='animated-underline'>
              <MdFavorite size={22} className="text-gray-500" />
            </Link>
            <Link to="/cart" className='animated-underline'>
              <HiShoppingBag size={22} className="text-gray-500" />
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
        <div className='flex flex-col gap-10 justify-center pl-8 mt-12'>
          <Link onClick={toggleDrawer(false)} to="/" className="text-xl underline underline-offset-8">Home</Link>
          <Link onClick={toggleDrawer(false)} to="/profile" className="text-xl underline underline-offset-8">Profile</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/jewelry" className="text-xl underline underline-offset-8">Jewelry</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/watches" className="text-xl underline underline-offset-8">Watches</Link>
          <Link onClick={toggleDrawer(false)} to="/contact" className="text-xl underline underline-offset-8">Contact</Link>

          {login ? (
            <button onClick={toggleDrawer(false)} className="text-xl text-left w-full underline underline-offset-8">
              Logout
            </button>
          ) : (
            null
          )}
        </div>
      </Drawer>

      {/* Login Modal */}
      <Modal
        open={showLoginModal}
        onClose={handleCloseLoginModal}
        aria-labelledby="login-modal"
        aria-describedby="login-form"
        disableScrollLock
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            boxShadow: 24,

            maxHeight: '80vh', // Maximum height with vertical scrolling
            overflowY: 'auto', // Enable vertical scrolling
          }}
        >

          <div className='relative '>
            <div className='flex items-center sticky w-full top-0 flex-col bg-gray-950 md:pt-2 pt-5 md:pb-5 pb-4'>
              <img src="/assets/images/dkrajLogoVariant2White.png" className='md:w-56 w-44' alt="dkrajLogo" />
            </div>




            <div className="bg-white">

              <form onSubmit={handleLogin} className='flex flex-col gap-2 md:px-3 md:py-4 px-4 py-4 md:w-[35vw] w-[83vw]'>
                <div className='mt-5'>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        username: e.target.value
                      });
                    }}
                    placeholder='Username'
                    className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                  />
                </div>

                <div className='mt-4'>
                  <input
                    type="password"
                    required
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        password: e.target.value
                      });
                    }}
                    placeholder='Password'
                    className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                  />
                  <div className='mt-2'>
                    <Link className='underline'>Forgot Password?</Link>
                  </div>
                </div>

                <button type='submit' className='bg-black w-full mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-2'>
                  SIGN IN
                </button>

                <div className='flex items-center '>
                  <div className='flex-grow border-t border-gray-400'></div>
                  <span className='mx-4 text-gray-400'>OR</span>
                  <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <button type='button' className='flex items-center justify-center  w-full  text-sm   border border-black px-3 py-2'>
                  <FaGoogle className='mr-2' /> Login with Google
                </button>
                <button type='button' className='flex items-center justify-center bg-blue-600 w-full mt-2 text-sm border border-blue-600 text-white  px-3 py-2'>
                  <FaFacebook className='mr-2' /> Login with Facebook
                </button>

                <div className='mt-3'>
                  <p>
                    Don't have an account? <Link to="/register" className='underline'>Register</Link> here.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>


    </>
  );
};

