import { useState } from 'react'
import { Link } from 'react-router-dom'



export const Login = () => {

    const [userData, setUserData] = useState({});


    const login = (e) => {
        e.preventDefault();

        console.log(userData)

    }


    return (
        <>

            <div className='min-h-screen pt-32 flex justify-center items-center pb-24'>

                <form onSubmit={login} className='md:w-1/3 w-full md:mx-0 mx-10 flex flex-col '>
                    <p className='text-center text-4xl font-semibold'>Sign In</p>

                    <div className='mt-5'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                username: e.target.value
                            })
                        }} placeholder='Username' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>

                    <div className='mt-4'>
                        <input type="password" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                password: e.target.value
                            })
                        }} placeholder='Password' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                        <div className='mt-2'> <Link className='underline'>Fogot Password?</Link> </div>
                    </div>





                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-3 py-2'> LOGIN</button>

                    <div className='mt-3'>
                        <p>Don't have an account? <Link to="/register" className='underline'>Register</Link>  here.</p>
                    </div>
                </form>

            </div>

        </>
    )
}
