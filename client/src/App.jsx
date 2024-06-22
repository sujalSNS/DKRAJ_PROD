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

        <Route  path="*" element={<NotFound/>} />

        <Route exact path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/profile" element={<Profile />} /> */}


      </Routes>
        <Newsletter />
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