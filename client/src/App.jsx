import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { useDispatch, useSelector } from 'react-redux'
// import { IsLogin, getUser } from './actions/userActions'
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

import { Toaster } from 'react-hot-toast';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Cart } from './pages/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import { Success } from './pages/Success/Success';
import { Profile } from './pages/Profile/Profile';
import { Orders } from './pages/Orders/Orders';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Product } from './pages/Product/Product';

function App() {



  // const { isLogin } = useSelector(state => state.user);


  // const dispatch = useDispatch()

  // useEffect(() => {

  //   dispatch(getUser());

  // }, [dispatch, isLogin]);

  // useEffect(() => {
  //   const LogOrNot = () => {
  //     dispatch(IsLogin());
  //   }
  //   LogOrNot()
  // }, []);



  return (
    <>


      <Navbar />
      <Routes>

        <Route path="*" element={<NotFound />} />

        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop/product/:productID" element={<Product />} />


      </Routes>
      {/* <Newsletter /> */}
      <Footer />


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