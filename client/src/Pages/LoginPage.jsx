import React from 'react';

//images
import img from '../images/img.jpg';

//icons
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


const LoginPage = () => {
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <div className='md:w-10/12 sm:w-11/12 md:h-4/6 sm:h-5/6 border-2 border-emerald-400 rounded-lg overflow-hidden shadow-xl'>
                <div className='md:flex md:justify-between w-full h-full'>
                    <div className='hidden sm:flex md:hidden'>
                        <h1 className='mx-auto text-2xl underline decoration-emerald-400'>
                            Login
                        </h1>
                    </div>
                    <div className='md:w-6/12 md:h-full sm:w-full sm:h-2/6 flex items-center justify-center'>
                        <img src={img} alt="Login Image" className='md:w-4/5 sm:w-1/3' />
                    </div>
                    <div className='hidden md:flex w-1 border border-emerald-500 my-20 ease-in-out rounded-full' />
                    <div className='md:w-6/12 md:h-full sm:h-5/6 sm:w-full md:flex justify-center items-center'>
                        <div>
                            <div className='hidden md:flex'>
                                <h1 className=' mb-10 mx-auto text-3xl underline decoration-emerald-400'>
                                    Login
                                </h1>
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <div >
                                    <button className='flex justify-center items-center gap-2 w-64 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'>
                                        <MdOutlineMobileFriendly />
                                        Sign In With Mobile
                                    </button>
                                    <button className='flex justify-center items-center gap-2 w-64 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'>
                                        <FcGoogle />
                                        Sign In With Google
                                    </button>
                                    <button className='flex justify-center items-center gap-2 w-64 border-2 border-emerald-700 hover:border-emerald-500 px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-200 ease-in-out mb-6'>
                                        <FaApple />
                                        Sign In With Apple
                                    </button>
                                    <div className='flex gap-2'>
                                        <input
                                            type="checkbox"
                                            name="termAndConditions"
                                            id="termAndConditions"
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