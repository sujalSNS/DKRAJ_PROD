import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/Global/ScrollToTop';
import { CookieConsentModal } from './components/Global/CookieConsentModal';

import { Toaster } from 'react-hot-toast';

import { Cart } from './pages/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import { Success } from './pages/Success/Success';
import { Profile } from './pages/Profile/Profile';
import { UserOrders } from './pages/Orders/UserOrders';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Product } from './pages/Product/Product';
import { Shop } from './pages/Shop/Shop';
import { Checkout } from './pages/Checkout/Checkout';
import { Dashboard } from './pages/Admin/Dashboard';
import { DrawerNavigation } from './pages/Admin/DrawerNavigation';
import { AddProduct } from './pages/Admin/AddProduct';
import { Products } from './pages/Admin/Products';
import { Orders } from './pages/Admin/Orders';
import { UserOrder } from './pages/Orders/UserOrder';
import { verify } from './actions/userActions';
import { WelcomeModal } from './components/Global/WelcomeModal';



function App() {




  const { isLogin } = useSelector(state => state.user);


  const dispatch = useDispatch()

  // useEffect(() => {

  //   dispatch(getUser());

  // }, [dispatch, isLogin]);

  useEffect(() => {
    const verifyAuth = () => {
      dispatch(verify());
    }
    verifyAuth()
  }, [dispatch]);




  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>

      <ScrollToTop />

      <Navbar />
      <Routes>

        <Route path="*" element={<NotFound />} />

        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<UserOrders />} />
        <Route path="/order/:orderID" element={<UserOrder />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:productID" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/dashboard" element={<Dashboard toggleDrawer={toggleDrawer} />} />
        <Route path="/admin/add-product" element={<AddProduct toggleDrawer={toggleDrawer} />} />
        <Route path="/admin/products" element={<Products toggleDrawer={toggleDrawer} />} />
        <Route path="/admin/orders" element={<Orders toggleDrawer={toggleDrawer} />} />


      </Routes>

      <Footer />


      <DrawerNavigation drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />


      <WelcomeModal />
      <CookieConsentModal />

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: '#white',
            color: 'black',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  )
}

export default App