import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnAuthorized } from '../../components/Global/UnAuthorized';
import { MdEdit } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { editProfile } from '../../actions/userActions'
import { CgSpinnerTwoAlt } from 'react-icons/cg';

export const EditProfile = () => {
    const { isLogin, user, loading } = useSelector((state) => state.user);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dob: "",
    });

    const [dob, setDob] = useState(user.dob);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserData({
                firstName: user.firstName ?? "",
                lastName: user.lastName ?? "",
                username: user.username ?? "",
                email: user.email ?? "",
                dob: user.dob ?? "",
            });
        }
    }, [user]);

    const firstUpper = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1, name.length);
    };

    function parseDate(dateString) {
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? new Date() : date;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("userData",)
        const updatedData = { ...userData, dob: dob.toISOString().split('T')[0] }
        dispatch(editProfile(updatedData))
    };

    return (
        <>
            <div className='min-h-screen md:pt-32 pt-20'>
                {isLogin ? (
                    <div className='md:pt-10 md:px-36 px-1 pb-20'>
                        <div className='mx-10 mb-6'>
                            <p className='text-3xl font-bold'>Edit Profile</p>
                        </div>

                        <form onSubmit={handleSubmit} className='mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4'>
                            <div className='mx-10'>
                                <p className='font-medium'>User ID</p>
                                <p className='bg-gray-200 px-3 font-semibold mt-2 py-2 text-sm'>{user.userID}</p>
                            </div>
                            
                            {[
                                { label: 'Username', key: 'username', value: userData.username },
                                { label: 'First Name', key: 'firstName', value: firstUpper(userData.firstName) },
                                { label: 'Last Name', key: 'lastName', value: firstUpper(userData.lastName) },
                                { label: 'Email ID', key: 'email', value: userData.email }
                            ].map((field) => (
                                <div className='mx-10' key={field.key}>
                                    <p className='font-medium'>{field.label}</p>
                                    <div className='bg-gray-200 flex items-center justify-between px-3 font-semibold mt-2 py-2 lowercase text-sm'>
                                        {field.key === 'username' ? 
                                            <input
                                            type='text'
                                            name={field.key}
                                            className='bg-gray-200 outline-none border w-11/12'
                                            value={field.value}
                                            placeholder={field.value ? field.value : "Please add username"}
                                            onChange={handleInputChange}
                                            required
                                        /> : <input
                                            type='text'
                                            name={field.key}
                                            className='bg-gray-200 outline-none border w-11/12'
                                            value={field.value}
                                            onChange={handleInputChange}
                                            required
                                        />}

                                        <MdEdit size={20} />

                                    </div>
                                </div>
                            ))}

                            <div className='mx-10'>
                                <p className='font-medium'>Date of Birth</p>
                                <div className='bg-gray-200 flex items-center justify-between px-3 font-semibold mt-2 py-2 lowercase text-sm'>
                                    <DatePicker
                                        selected={dob}
                                        onChange={(date) => setDob(date)}
                                        className='bg-gray-200 outline-none border w-12/12'
                                        dateFormat='yyyy/MM/dd'
                                        placeholderText={!dob ? 'Please add date of birth' : ''}
                                        required
                                    />

                                    <MdEdit size={20} />

                                </div>
                            </div>

                            <div className='px-8 md:gap-10 ml-2 mr-2 gap-4 flex justify-start md:items-center md:flex-row flex-col'>


                                {loading ?
                                    <button disabled className='bg-white w-full flex items-center justify-center text-sm border border-black text-black cursor-default px-2 py-1'>
                                        <CgSpinnerTwoAlt className='animate-spin my-0.5' size={24} />
                                    </button> :
                                    <button type="submit" className='bg-black w-full flex items-center justify-center  text-sm border border-black text-white hover:text-black hover:bg-white px-2 py-2'>  CONFIRM EDIT</button>
                                }
                            </div>
                        </form>
                    </div>
                ) : (
                    <UnAuthorized />
                )}
            </div>
        </>
    );
};
