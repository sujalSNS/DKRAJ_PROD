import { useState } from 'react'
import { Link } from 'react-router-dom'



export const Register = () => {

    const [userData, setUserData] = useState({});
    const [isDateSelected, setIsDateSelected] = useState(false);


    const register = (e) => {
        e.preventDefault();

        console.log(userData)

    }   



    return (
        <>

            <div className='min-h-screen pt-32 flex justify-center items-center pb-24'>

                <form onSubmit={register} className='md:w-1/3 w-full md:mx-0 mx-10 md:mt-12 flex flex-col '>
                    <p className='text-center text-4xl font-semibold'>Create Account</p>

                    <div className='mt-5'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                firstName: e.target.value
                            })
                        }} placeholder='First Name' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-5'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                lastName: e.target.value
                            })
                        }} placeholder='Last Name' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-5'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                username: e.target.value
                            })
                        }} placeholder='Username' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-5'>
                        <input type="text" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                email: e.target.value
                            })
                        }} placeholder='Email' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    {/* <div className='mt-5'>
                        <input
                            type="date"
                            required
                            value={userData.dob}
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    dob: e.target.value
                                });
                            }}
                            placeholder='Date of Birth'
                            className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black'
                        />


                    </div> */}
                



                    <div className='mt-4'>
                        <input type="password" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                password: e.target.value
                            })
                        }} placeholder='Password' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                    </div>
                    <div className='mt-4'>
                        <input type="password" required onChange={(e) => {
                            setUserData({
                                ...userData,
                                confirmPassword: e.target.value
                            })
                        }} placeholder='Confirm Password' className='border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black' />
                        <p className='mt-2 text-sm'> By creating an account, I consent to the processing of my personal data in accordance with the <span className='font-semibold'>PRIVACY POLICY</span>.</p>
                    </div>





                    <button type='submit' className='bg-black w-full mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-3 py-2'> REGISTER</button>

                    <div className='mt-3'>
                        <p>Already have an account? <Link to="/login" className='underline'>Login</Link>  here.</p>
                    </div>
                </form>

            </div>

        </>
    )
}
