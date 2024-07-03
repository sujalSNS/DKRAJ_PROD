import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';


export const Login = () => {
    const [userData, setUserData] = useState({});

    const login = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    const loginWithGoogle = () => {
        // Implement Google login logic here
        console.log("Login with Google");
    };

    const loginWithFacebook = () => {
        // Implement Facebook login logic here
        console.log("Login with Facebook");
    };

    return (
        <div className='min-h-screen pt-32 flex justify-center items-center pb-24'>
            <form onSubmit={login} className='md:w-1/3 w-full md:mx-0 mx-10 flex flex-col pt-16'>
                <p className='text-center text-4xl font-semibold'>Sign In</p>

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
                    LOGIN
                </button>

                <div className='flex items-center my-2'>
                    <div className='flex-grow border-t border-gray-400'></div>
                    <span className='mx-4 text-gray-400'>OR</span>
                    <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <button type='button' className='flex items-center justify-center  w-full mt-2 text-sm   border border-black px-3 py-2'>
                    <FaGoogle className='mr-2' /> Login with Google
                </button>
                <button type='button' className='flex items-center justify-center bg-blue-600 w-full mt-4 text-sm border border-blue-600 text-white  px-3 py-2'>
                    <FaFacebook className='mr-2' /> Login with Facebook
                </button>

                <div className='mt-3'>
                    <p>
                        Don't have an account? <Link to="/register" className='underline'>Register</Link> here.
                    </p>
                </div>
            </form>
        </div>
    );
};
