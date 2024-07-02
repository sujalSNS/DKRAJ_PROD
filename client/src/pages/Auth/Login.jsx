import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaFacebook } from 'react-icons/fa'; // Facebook icon

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
            <form onSubmit={login} className='md:w-1/3 w-full md:mx-0 mx-10 flex flex-col '>
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

                {/* <div className='mt-3 flex flex-col gap-2'>
                    <p className='text-center'>OR</p>
                    <button
                        type='button'
                        onClick={loginWithGoogle}
                        className='bg-white w-full border border-gray-400 text-gray-700 hover:bg-gray-100 px-3 py-2 text-sm flex items-center justify-center gap-2'
                    >
                        <FcGoogle size={20} />
                        Login with Google
                    </button>
                    <button
                        type='button'
                        onClick={loginWithFacebook}
                        className='bg-blue-600 w-full border border-blue-600 text-white hover:bg-blue-700 px-3 py-2 text-sm flex items-center justify-center gap-2'
                    >
                        <FaFacebook size={20} />
                        Login with Facebook
                    </button>
                </div> */}

                <div className='mt-3'>
                    <p>
                        Don't have an account? <Link to="/register" className='underline'>Register</Link> here.
                    </p>
                </div>
            </form>
        </div>
    );
};
