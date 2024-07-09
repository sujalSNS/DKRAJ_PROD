import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { HiShoppingBag, HiMiniBars3, HiUser } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import { Drawer, IconButton, Menu, MenuItem } from '@mui/material';
import { PromotionLabel } from './PromotionLabel';
import { AuthModel } from './AuthModels';
import { useSelector, useDispatch } from 'react-redux';
import { verify } from '../../actions/userActions';
import toast from 'react-hot-toast';


export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const { isLogin } = useSelector((state) => state.user)

  const dispatch = useDispatch()

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
    if (!isLogin) {
      // Open the login modal instead of navigating to "/login"
      setShowLoginModal(true);
      return;
    }

    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAuthModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(verify())
    handleMenuClose();
    toast.success("Logout Successfull!")
  }

  return (
    <>
      <nav className='fixed z-10 w-full bg-white border-b border-gray-300'>
        <PromotionLabel text={"GET RS.1000 CASHBACK ON PURCHASE OF RS.6000 | GET RS.2000 CASHBACK ON PURCHASE OF RS.10000"} />

        <div className='flex justify-between items-center pl-3 md:gap-0 md:px-16 md:pt-0 pt-3  md:pb-1 pb-1'>


          <div className='md:hidden flex'>
            <IconButton onClick={toggleDrawer(true)}>
              <HiMiniBars3 size={29} />
            </IconButton>
          </div>

          <div className='flex justify-center items-center md:mr-16 md:ml-0 ml-4'>
            <Link to="/" className='font-bold md:text-4xl text-xl text-center h-10 md:h-20 flex justify-center items-center pb-1'>
              <img src="/assets/images/dkrajLogoVariant1Black.png" alt="DKRAJ JEWELS" className='object-cover h-[1.6em]' />
            </Link>


            <div className='md:flex items-center gap-12 ml-20 pt-3 justify-center hidden'>
              <Link to="/" className='text-xs 2xl:text-lg animated-underline'>SHOP BY</Link>
              <Link to="/shop" className='text-xs 2xl:text-lg animated-underline'>NEW</Link>
              <Link to="/shop" className='text-xs 2xl:text-lg animated-underline'>BEST SELLERS</Link>
              <Link to="/about" className='text-xs 2xl:text-lg animated-underline'>EARRINGS</Link>
              <Link to="/about" className='text-xs 2xl:text-lg animated-underline'>RINGS</Link>
              <Link to="/about" className='text-xs 2xl:text-lg animated-underline'>NECKLACES</Link>
              <Link to="/about" className='text-xs 2xl:text-lg animated-underline'>BRACELETS</Link>
              <Link to="/about" className='text-xs 2xl:text-lg animated-underline'>MEN'S</Link>
            </div>
          </div>

          <div className='md:flex hidden justify-center items-center gap-6 mr-4'>
            <button onClick={handleMenuOpen} className='animated-underline'>
              <HiUser size={23} className="text-gray-500" />
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
              <MenuItem onClick={handleLogout}>
                <p className='font-semibold'>Logout</p>
              </MenuItem>
            </Menu>

            <Link to="/wishlist" className='animated-underline'>
              <MdFavorite size={24} className="text-gray-500" />
            </Link>
            <Link to="/cart" className='animated-underline'>
              <HiShoppingBag size={24} className="text-gray-500" />
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

          {isLogin ? (
            <button onClick={toggleDrawer(false)} className="text-xl text-left w-full underline underline-offset-8">
              Logout
            </button>
          ) : (
            null
          )}
        </div>
      </Drawer>



      <AuthModel handleCloseAuthModal={handleCloseAuthModal} showLoginModal={showLoginModal} />




    </>
  );
};

