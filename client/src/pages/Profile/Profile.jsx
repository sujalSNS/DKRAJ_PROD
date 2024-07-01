import React from 'react'
import { Link } from 'react-router-dom'



const user = {
    id: "1273982173",
    firstName: "sam",
    lastName: "altman",
    username: "samaa2313",
    email: "samaltman@mail.com",
    phone: "1232132323"
}

const getInitials = (firstName, lastName) => {
    const str = firstName.charAt(0) + lastName.charAt(0)
    return str.toUpperCase()
}
const firstUpper = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1, name.length)
}

export const Profile = () => {
    return (
        <>

            <div className='min-h-screen md:pt-32 pt-20'>
                <div className='md:pt-14  md:px-36 px-1 pb-20'>
                    <div className='flex justify-start md:items-center items-start md:flex-row flex-col gap-8 pb-3 md:pl-5 pl-10'>

                        <div className=' md:text-5xl text-4xl rounded-full bg-gray-200 md:p-14 p-12 shadow-sm shadow-gray-200'>
                            {getInitials(user.firstName, user.lastName)}
                        </div>
                        <div>
                            <p className='text-2xl font-medium'>{firstUpper(user.firstName)} {firstUpper(user.lastName)}</p>
                            <p className='text-xl'>{user.email.toLowerCase()}</p>
                        </div>

                    </div>

                    <div className="mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">

                        <div className='mx-10'>
                            <p className="font-medium">User ID</p>
                            <p className="bg-gray-200 px-3 font-semibold mt-2 py-2 text-sm">{user.id}</p>
                        </div>
                        <div className='mx-10'>
                            <p className="font-medium">Name</p>
                            <p className="bg-gray-200 px-3 font-semibold mt-2 py-2 text-sm">{firstUpper(user.firstName)} {firstUpper(user.lastName)}</p>
                        </div>
                        <div className='mx-10'>
                            <p className="font-medium">Email ID</p>
                            <p className="bg-gray-200 px-3 font-semibold mt-2 py-2 lowercase text-sm">{user.email}</p>
                        </div>
                        <div className='mx-10'>
                            <p className="font-medium">Phone</p>
                            <p className="bg-gray-200 px-3 font-semibold mt-2 py-2 lowercase text-sm">{user.phone}</p>
                        </div>

                    </div>


                    <div className='mt-6 px-8  md:gap-10 gap-4 
                    flex justify-start md:items-center   md:flex-row flex-col
                    '>
                        <Link to="/orders" className='bg-black  md:w-full w-4/5 text-center  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2'>
                            YOUR ORDERS
                        </Link>
                        <Link to="/wishlist" className='bg-black  md:w-full w-4/5 text-center  mt-4 text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2'>
                            YOUR WISHLIST
                        </Link>
                        <Link to="/cart" className='bg-black   mt-4 md:w-full w-4/5 text-center text-sm border border-black  text-white hover:text-black hover:bg-white px-12 py-2'>
                            YOUR CART
                        </Link>


                    </div>
                </div>
            </div>

        </>
    )
}

