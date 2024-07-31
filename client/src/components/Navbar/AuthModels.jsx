import React, { useState, useEffect } from 'react'
import { Modal, Box } from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Marquee from 'react-fast-marquee';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { login, register, googleAuth, facebookAuth } from '../../actions/userActions';


const textMarquee = [
    { label: "FREE SHIPPING EVERY MONDAY" },
    { label: "BIRTHDAY TREAT" },
    { label: "PRIORITY SALE ACCESS" },
    { label: "EXCLUSIVE PRODUCTS" },
]



const loginForm = ({ setToggleAuth, dispatch, authLoading, userLoginData, setUserLoginData, setSuccessToggle, handleContinueWithGoogle, handleContinueWithFacebook }) => {


    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(login(userLoginData, setSuccessToggle));
    };


    const handleChangeToRegister = (e) => {
        e.preventDefault();
        setUserLoginData({
            emailOrUsername: "",
            password: ""
        });
        setToggleAuth("register");
    };

    return (
        <div className="bg-white">
            <form onSubmit={handleLogin} className='flex flex-col gap-2 md:px-8 md:py-7 px-5 py-5 md:w-[35vw] w-[88vw]'>
                <button onClick={handleContinueWithGoogle} type='button' className='flex hover:bg-gray-100 items-center justify-center  w-full mt-0 text-sm   border border-black px-3 py-2'>
                    <FaGoogle className='mr-2' /> CONTINUE WITH GOOGLE
                </button>
                {/* <button onClick={handleContinueWithFacebook} type='button' className='flex items-center justify-center hover:bg-blue-700 bg-blue-600 w-full mt-2 text-sm border border-blue-600 text-white  px-3 py-2'>
                    <FaFacebook className='mr-2' /> CONTINUE WITH FACEBOOK
                </button> */}
                <div className='flex items-center '>
                    <div className='flex-grow border-t border-gray-400'></div>
                    <span className='mx-4 text-gray-400'>OR</span>
                    <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <div className='mt-2'>
                    <input
                        type="text"
                        required
                        name="loginEmail"
                        value={userLoginData.emailOrUsername || ""}
                        onChange={(e) => {
                            setUserLoginData({
                                ...userLoginData,
                                emailOrUsername: e.target.value
                            });
                        }}
                        placeholder='Email or Username'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <div className='mt-3'>
                    <div className="flex items-center">
                        <input
                            type="password"
                            required
                            name="loginPassword"
                            value={userLoginData.password || ""}
                            onChange={(e) => {
                                setUserLoginData({
                                    ...userLoginData,
                                    password: e.target.value
                                });
                            }}
                            placeholder='Password'
                            className='border py-2 w-full  border-gray-400 px-2 focus:outline-none focus:border-black'
                        />
                    </div>
                    <div className='mt-2'>
                        <Link className='underline'>Forgot Password?</Link>
                    </div>
                </div>
                {authLoading ?
                    <button disbaled className='bg-white w-full mt-4 flex items-center justify-center text-sm border border-black text-black cursor-default px-3 py-2'>
                        <CgSpinnerTwoAlt className='animate-spin my-0.5' size={24} />
                    </button> :
                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-3'>
                        SIGN IN
                    </button>
                }
                <div className='mt-3'>
                    <p>
                        Don't have an account? <button onClick={handleChangeToRegister} className='underline'>Register</button> here.
                    </p>
                </div>
            </form>
        </div>
    );
}

const registerForm = ({ setToggleAuth, dispatch, authLoading, userRegisterData, setUserRegisterData, setSuccessToggle, handleContinueWithGoogle, handleContinueWithFacebook }) => {


    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(userRegisterData, setSuccessToggle));
    };

    const handleChangeToLogin = (e) => {
        e.preventDefault();
        setUserRegisterData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            dob: "",
            password: "",
            confirmPassword: ""
        });
        setToggleAuth("login");
    };

    return (
        <div className="bg-white">
            <form onSubmit={handleRegister} className='flex flex-col gap-2 md:px-8 md:py-7 px-5 py-5 
            md:w-[35vw] w-[88vw]'>
                <button onClick={handleContinueWithGoogle} type='button' className='flex hover:bg-gray-100 items-center justify-center  w-full mt-0 text-sm   border border-black px-3 py-2'>
                    <FaGoogle className='mr-2' /> CONTINUE WITH GOOGLE
                </button>
                {/* <button onClick={handleContinueWithFacebook} type='button' className='flex items-center justify-center hover:bg-blue-700 bg-blue-600 w-full mt-2 text-sm border border-blue-600 text-white  px-3 py-2'>
                    <FaFacebook className='mr-2' /> CONTINUE WITH FACEBOOK
                </button> */}
                <div className='flex items-center '>
                    <div className='flex-grow border-t border-gray-400'></div>
                    <span className='mx-4 text-gray-400'>OR</span>
                    <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <div className='mt-2'>
                    <input
                        value={userRegisterData.firstName || ""}
                        type="text"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                firstName: e.target.value
                            });
                        }}
                        placeholder='First Name'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <div className='mt-3'>
                    <input
                        value={userRegisterData.lastName || ""}
                        type="text"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                lastName: e.target.value
                            });
                        }}
                        placeholder='Last Name'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <div className='mt-3'>
                    <input
                        value={userRegisterData.username || ""}
                        type="text"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                username: e.target.value
                            });
                        }}
                        placeholder='Username'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <div className='mt-3'>
                    <input
                        value={userRegisterData.email || ""}
                        type="email"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                email: e.target.value
                            });
                        }}
                        placeholder='Email'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <DatePicker
                    className='border py-2 mt-3 min-w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    selected={userRegisterData.dob}
                    placeholderText='Date of birth'
                    onChange={(date) => setUserRegisterData({
                        ...userRegisterData,
                        dob: date
                    })}
                />
                <div className='mt-3'>
                    <input
                        value={userRegisterData.password || ""}
                        type="password"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                password: e.target.value
                            });
                        }}
                        placeholder='Password'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                </div>
                <div className='mt-3'>
                    <input
                        value={userRegisterData.confirmPassword || ""}
                        type="password"
                        required
                        onChange={(e) => {
                            setUserRegisterData({
                                ...userRegisterData,
                                confirmPassword: e.target.value
                            });
                        }}
                        placeholder='Confirm Password'
                        className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                    />
                    <p className='mt-2 text-sm'> By creating an account, I consent to the processing of my personal data in accordance with the <span className='font-semibold'>PRIVACY POLICY</span>.</p>
                </div>


                {authLoading ?
                    <button disbaled className='bg-white w-full mt-4 flex items-center justify-center text-sm border border-black text-black cursor-default px-3 py-2'>
                        <CgSpinnerTwoAlt className='animate-spin my-0.5' size={24} />
                    </button> :
                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-3'>
                        REGISTER
                    </button>
                }
                <div className='mt-3'>
                    <p>
                        Already have an account? <button onClick={handleChangeToLogin} className='underline'>Login</button> here.
                    </p>
                </div>
            </form>
        </div>
    );
}


export const AuthModel = ({ showLoginModal, handleCloseAuthModal }) => {
    const [toggleAuth, setToggleAuth] = useState("login");

    const [userLoginData, setUserLoginData] = useState({
        emailOrUsername: "",
        password: ""
    });

    const [successToggle, setSuccessToggle] = useState(false)

    const [userRegisterData, setUserRegisterData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: ""
    });

    const { authLoading } = useSelector((state) => state.user)

    const dispatch = useDispatch()


    useEffect(() => {
        if (successToggle) {
            handleOnClose()
        }
    }, [successToggle])

    const handleContinueWithGoogle = () => {

        dispatch(googleAuth(setSuccessToggle))
    }

    const handleContinueWithFacebook = () => {

        dispatch(facebookAuth(setSuccessToggle))
    }

    const handleOnClose = () => {
        setUserRegisterData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            dob: "",
            password: "",
            confirmPassword: ""
        });
        setUserLoginData({
            email: "",
            password: ""
        })
        setToggleAuth("login")
        setSuccessToggle(false)
        handleCloseAuthModal()
    }


    return (
        <>
            {/* Login Modal */}
            <Modal
                open={showLoginModal}
                onClose={handleOnClose}
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
                        height: '83vh',
                        overflowY: 'auto',
                        // '::-webkit-scrollbar': {
                        //     display: 'none'
                        // },
                        // '-ms-overflow-style': 'none',
                        // 'scrollbar-width': 'none'
                    }}
                >

                    <div className='bg-gray-950'>
                        <div className='flex items-center sticky w-full top-0 z-10 flex-col bg-gray-950 md:pt-2 pt-5 md:pb-5 pb-4'>
                            <button onClick={handleOnClose} className='text-white absolute right-3 top-3'><RxCross2 size={24} /></button>
                            <img src="/assets/images/dkrajLogoVariant2White.png" className='md:w-52 w-36' alt="dkrajLogo" />

                            <p className='text-gray-200 2xl:text-sm text-xs pt-3 text-center uppercase'>Join the DKRAJ Club
                                Become a member and get multiple benefits.
                            </p>

                        </div> 
                        <div className='bg-gray-950 border-t py-2 border-white md:w-[35vw] w-[88vw]'>
                            <Marquee pauseOnHover autoFill speed={30} >
                                {
                                    textMarquee.map((e) => (
                                        <span key={e.label} className='font-medium cursor-pointer text-white text-xs mx-4 ' >{e.label}</span>
                                    ))
                                }
                            </Marquee>

                        </div>


                        {toggleAuth === "login" ?
                            loginForm({ setToggleAuth, dispatch, authLoading, userLoginData, setUserLoginData, handleOnClose, setSuccessToggle, handleContinueWithGoogle, handleContinueWithFacebook }) :
                            registerForm({ setToggleAuth, dispatch, authLoading, userRegisterData, setUserRegisterData, handleOnClose, setSuccessToggle, handleContinueWithGoogle, handleContinueWithFacebook })}


                    </div>
                </Box>
            </Modal>

        </>
    )
}




