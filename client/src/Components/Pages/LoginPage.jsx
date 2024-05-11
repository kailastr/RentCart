import React from 'react';

//images
import img from '../../images/img.jpg';

//icons
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <div className='md:w-10/12 sm:w-11/12 md:h-5/6 sm:h-full border-2 border-emerald-400 rounded-lg overflow-hidden shadow-xl'>
                <div className='flex md:flex-row sm:flex-col md:justify-between w-full h-full'>
                    <div className='hidden sm:flex md:hidden'>
                        <h1 className='mx-auto my-5 text-2xl underline decoration-emerald-400'>
                            Login
                        </h1>
                    </div>
                    <div className='md:w-5/12 md:h-full sm:w-full sm:h-2/6 flex items-center justify-center'>
                        <img
                            src={img}
                            alt="Login Image"
                            className='md:w-4/5 sm:w-1/3'
                        />
                    </div>
                    <div className='hidden md:flex w-1 border border-emerald-500 my-20 ease-in-out rounded-full' />
                    <div className='md:w-7/12 md:h-full sm:h-5/6 sm:w-full md:flex justify-center items-center'>
                        <div className='lg:w-6/12 md:w-10/12 sm:w-full'>
                            <div className='hidden md:flex'>
                                <h1 className=' mb-10 mx-auto text-3xl underline decoration-emerald-400'>
                                    Login
                                </h1>
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <div className='w-full' >
                                    <form action="">
                                        <div className='w-full flex flex-col justify-center items-center gap-2 mb-3'>
                                            <div className='w-11/12'>
                                                <label htmlFor="userName">
                                                    User Name :
                                                </label>
                                            </div>
                                            <input
                                                type="email"
                                                name="userName"
                                                id="userName"
                                                className=' border-2 border-emerald-400 rounded-md focus:outline-emerald-600 w-11/12 px-2 py-1'
                                                placeholder='Email Id'
                                                required
                                            />
                                        </div>
                                        <div className='w-full flex flex-col justify-center items-center gap-2 mb-3'>
                                            <div className='w-11/12'>
                                                <label htmlFor="userPassword">
                                                    Password :
                                                </label>
                                            </div>
                                            <input
                                                type="password"
                                                name="userPassword"
                                                id="userPassword"
                                                className=' border-2 border-emerald-400 rounded-md focus:outline-emerald-600 w-11/12 px-2 py-1'
                                                placeholder='*********'
                                                required
                                            />
                                        </div>
                                        <div className='w-full flex justify-center items-center'>
                                            <button
                                                type='submit'
                                                className='flex justify-center items-center gap-2 w-11/12 border-2 hover:bg-emerald-50 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out'
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                    <p className=' text-center my-3 text-lg'>or</p>
                                    {/* <div className='w-full flex justify-center items-center'>
                                        <button className='flex justify-center items-center gap-2 w-11/12 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'>
                                            <MdOutlineMobileFriendly />
                                            Sign In With Mobile
                                        </button>
                                    </div> */}
                                    <div className='w-full flex justify-center items-center'>
                                        <button
                                            className='flex justify-center items-center gap-2 w-11/12 hover:bg-blue-50 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'
                                        >
                                            <FcGoogle />
                                            Sign In With Google
                                        </button>
                                    </div>
                                    {/* <div className=' w-full flex justify-center items-center'>
                                        <button className='flex justify-center items-center gap-2 w-11/12 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'>
                                            <FaApple />
                                            Sign In With Apple
                                        </button>
                                    </div> */}
                                    <div className=' w-full flex gap-2 items-center justify-center md:my-2 sm:my-5'>
                                        <input
                                            type="checkbox"
                                            name="termAndConditions"
                                            id="termAndConditions"
                                            required
                                        />
                                        <div className=' w-60 text-sm'>
                                            <p>I agree with <a href="##" className='text-blue-600 hover:text-blue-800 underline'>privacy policy</a> and <a href="##" className='text-blue-600 hover:text-blue-800 underline'>Terms and Conditions</a> with Content Policy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage