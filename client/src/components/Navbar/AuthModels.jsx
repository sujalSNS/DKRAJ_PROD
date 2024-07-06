


import React, { useState } from 'react'
import { Modal, Box } from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Marquee from 'react-fast-marquee';


const textMarquee = [
    { label: "FREE SHIPPING EVERY MONDAY" },
    { label: "BIRTHDAY TREAT" },
    { label: "PRIORITY SALE ACCESS" },
    { label: "EXCLUSIVE PRODUCTS" },
]



const loginForm = ({ setToggleAuth }) => {


    const [userData, setUserData] = useState({});



    return (
        <>
            <div className="bg-white">

                <form className='flex flex-col gap-2 md:px-3 md:py-4 px-4 py-4 md:w-[35vw] w-[88vw]'>
                <button type='button' className='flex items-center justify-center  w-full mt-0 text-sm   border border-black px-3 py-2'>
                        <FaGoogle className='mr-2' /> CONTINUE WITH GOOGLE
                    </button>
                    <button type='button' className='flex items-center justify-center bg-blue-600 w-full mt-2 text-sm border border-blue-600 text-white  px-3 py-2'>
                        <FaFacebook className='mr-2' /> CONTINUE WITH FACEBOOK
                    </button>

                    <div className='flex items-center '>
                        <div className='flex-grow border-t border-gray-400'></div>
                        <span className='mx-4 text-gray-400'>OR</span>
                        <div className='flex-grow border-t border-gray-400'></div>
                    </div>
                    <div className='mt-2'>
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

                    <div className='mt-3'>
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

                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-3'>
                        SIGN IN
                    </button>


                    <div className='mt-3'>
                        <p>
                            Don't have an account? <button onClick={(e) => {
                                e.preventDefault()
                                setToggleAuth("register")
                            }
                            } className='underline'>Register</button> here.
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

const registerForm = ({ setToggleAuth }) => {


    const [userData, setUserData] = useState({});



    return (
        <>
            <div className="bg-white">

                <form className='flex flex-col gap-2 md:px-3 md:py-4 px-4 py-4 md:w-[35vw] w-[88vw]'>
                <button type='button' className='flex items-center justify-center  w-full mt-0 text-sm   border border-black px-3 py-2'>
                        <FaGoogle className='mr-2' /> CONTINUE WITH GOOGLE
                    </button>
                    <button type='button' className='flex items-center justify-center bg-blue-600 w-full mt-2 text-sm border border-blue-600 text-white  px-3 py-2'>
                        <FaFacebook className='mr-2' /> CONTINUE WITH FACEBOOK
                    </button>

                    <div className='flex items-center '>
                        <div className='flex-grow border-t border-gray-400'></div>
                        <span className='mx-4 text-gray-400'>OR</span>
                        <div className='flex-grow border-t border-gray-400'></div>
                    </div>
                    <div className='mt-2'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                firstName: e.target.value
                            })
                        }} placeholder='First Name' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-3'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                lastName: e.target.value
                            })
                        }} placeholder='Last Name' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-3'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                username: e.target.value
                            })
                        }} placeholder='Username' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-3'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                email: e.target.value
                            })
                        }} placeholder='Email' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>

                    <DatePicker className='border py-2 mt-3 min-w-full border-gray-400 px-2 focus:outline-none focus:border-black' selected={userData.dob} placeholderText='Date of birth' onChange={(date) => setUserData({
                        ...userData,
                        dob: date
                    })} />

                    <div className='mt-3'>
                        <input type="password" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                password: e.target.value
                            })
                        }} placeholder='Password' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-3'>
                        <input type="password" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                confirmPassword: e.target.value
                            })
                        }} placeholder='Confirm Password' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                        <p className='mt-2 text-sm'> By creating an account, I consent to the processing of my personal data in accordance with the <span className='font-semibold'>PRIVACY POLICY</span>.</p>
                    </div>





                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-3 py-3'> REGISTER</button>

                    
                  

                    <div className='mt-3'>
                        <p>Already have an account? <button onClick={(e) => {
                            e.preventDefault()
                            setToggleAuth("login")
                        }
                        } className='underline'>Login</button>  here.</p>
                    </div>
                </form>
            </div>
        </>
    )
}


export const AuthModel = ({ showLoginModal, handleCloseLoginModal }) => {
    const [toggleAuth, setToggleAuth] = useState("login");




    return (
        <>
            {/* Login Modal */}
            <Modal
                open={showLoginModal}
                onClose={handleCloseLoginModal}
                aria-labelledby="login-modal"
                aria-describedby="login-form"
 
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',

                        boxShadow: 24,

                        height: '80vh', 
                        overflowY: 'auto', 
                    }}
                >

                    <div className=' bg-gray-950 '>
                        <div className='flex items-center sticky w-full top-0 z-10 flex-col bg-gray-950 md:pt-2 pt-5 md:pb-5 pb-4'>
                            <button onClick={handleCloseLoginModal} className='text-white absolute right-3 top-3'><RxCross2 size={24} /></button>
                            <img src="/assets/images/dkrajLogoVariant2White.png" className='md:w-56 w-44' alt="dkrajLogo" />
                            
                        </div>
                        <div className='bg-gray-950 border-t py-2 border-white md:w-[35vw] w-[88vw]'>
                            <Marquee autoFill speed={30} >
                                {
                                    textMarquee.map((e) => (
                                        <span key={e.label} className='font-medium text-white text-sm mx-4 ' >{e.label}</span>
                                    ))
                                }
                            </Marquee>

                        </div>


                        {toggleAuth === "login" ?
                            loginForm({ setToggleAuth }) : registerForm({ setToggleAuth })}


                    </div>
                </Box>
            </Modal>

        </>
    )
}




