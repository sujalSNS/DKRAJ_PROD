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
import { LogoutDialog } from './LogoutDialog';
import toast from 'react-hot-toast';
import { setShowLoginModalTrue, setShowLoginModalFalse } from "../../slices/userSlice";

export const Navbar = () => {
  // State variables
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open state
  const [searchValue, setSearchValue] = useState(''); // Search input value
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor element for user menu
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false); // Logout confirmation dialog state

  // Navigation hook from React Router
  const navigate = useNavigate();

  // Redux state access
  const { isLogin, showLoginModal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Toggle drawer function
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Handle opening user menu
  const handleMenuOpen = (event) => {
    if (!isLogin) {
      // Show login modal if user is not logged in
      dispatch(setShowLoginModalTrue());
      return;
    }
    // Open user menu
    setAnchorEl(event.currentTarget);
  };

  // Handle closing user menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle closing authentication modal
  const handleCloseAuthModal = () => {
    dispatch(setShowLoginModalFalse());
  };

  // Handle opening logout confirmation dialog
  const handleLogoutDialogOpen = () => {
    setLogoutDialogOpen(true);
    handleMenuClose(); // Close user menu when opening logout dialog
  };

  // Handle closing logout confirmation dialog
  const handleLogoutDialogClose = () => {
    setLogoutDialogOpen(false);
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    dispatch(verify()); // Verify user authentication status
    handleLogoutDialogClose(); // Close logout dialog
    toast.success("Logout Successful!"); // Show toast notification for successful logout
  };

  return (
    <>
      {/* Navbar section */}
      <nav className='fixed z-10 w-full bg-white border-b border-gray-300'>
        {/* Promotion label */}
        <PromotionLabel text={"GET RS.1000 CASHBACK ON PURCHASE OF RS.6000 | GET RS.2000 CASHBACK ON PURCHASE OF RS.10000"} />

        {/* Navbar content */}
        <div className='flex justify-between items-center pl-3 md:gap-0 md:px-16 md:pt-0 pt-3 md:pb-1 pb-1'>
          {/* Mobile menu icon */}
          <div className='md:hidden flex'>
            <IconButton onClick={toggleDrawer(true)}>
              <HiMiniBars3 size={29} />
            </IconButton>
          </div>

          {/* Logo and navigation links */}
          <div className='flex justify-center items-center md:mr-16 md:ml-0 ml-4'>
            <Link to="/" className='font-bold md:text-4xl text-xl text-center h-10 md:h-20 flex justify-center items-center pb-1'>
              <img src="/assets/images/dkrajLogoVariant1Black.png" alt="DKRAJ JEWELS" className='object-cover h-[1.6em]' />
            </Link>

            {/* Desktop navigation links */}
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

          {/* User menu and icons */}
          <div className='md:flex hidden justify-center items-center gap-6 mr-4'>
            <button onClick={handleMenuOpen} className='animated-underline'>
              <HiUser size={23} className="text-gray-500" />
            </button>

            {/* User menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              disableScrollLock={true} // Disable scroll lock for better usability
              className='pt-1'
            >
              <MenuItem onClick={() => {
                navigate("/profile");
                handleMenuClose();
              }}>
                <p className='font-semibold'>Profile</p>
              </MenuItem>
              <MenuItem onClick={handleLogoutDialogOpen}>
                <p className='font-semibold'>Logout</p>
              </MenuItem>
            </Menu>

            {/* Wishlist and cart icons */}
            <Link to="/wishlist" className='animated-underline'>
              <MdFavorite size={24} className="text-gray-500" />
            </Link>
            <Link to="/cart" className='animated-underline'>
              <HiShoppingBag size={24} className="text-gray-500" />
            </Link>
          </div>

          {/* Mobile user menu and icons */}
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

      {/* Logout confirmation dialog */}
      <LogoutDialog
        open={logoutDialogOpen}
        handleClose={handleLogoutDialogClose}
        handleLogout={handleLogout}
      />

      {/* Left drawer for mobile navigation */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        disableScrollLock={true} // Disable scroll lock for better usability
        sx={{ '& .MuiDrawer-paper': { width: '240px' } }}
      >
        <div className='flex flex-col gap-10 justify-center pl-8 mt-12'>
          <Link onClick={toggleDrawer(false)} to="/" className="text-xl underline underline-offset-8">Home</Link>
          <Link onClick={toggleDrawer(false)} to="/profile" className="text-xl underline underline-offset-8">Profile</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/jewelry" className="text-xl underline underline-offset-8">Jewelry</Link>
          <Link onClick={toggleDrawer(false)} to="/shop/watches" className="text-xl underline underline-offset-8">Watches</Link>
          <Link onClick={toggleDrawer(false)} to="/contact" className="text-xl underline underline-offset-8">Contact</Link>
        </div>
      </Drawer>

      {/* Authentication modal */}
      <AuthModel handleCloseAuthModal={handleCloseAuthModal} showLoginModal={showLoginModal} />
    </>
  );
};
