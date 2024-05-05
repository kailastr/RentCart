import React from 'react';

import logo from '../images/locationImg.jpg'

//icons
import { FaSearch } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";

//Navbar for large screen view
function LgNav() {
    return (
        <>
            <nav className='w-full h-28 bg-lime-400 px-10'>
                <div className='flex justify-between gap-5'>
                    <div className=' w-5/12 h-28 flex items-center gap-7'>
                        <img
                            src={logo}
                            alt="EV logo"
                            className='h-16 rounded-full'
                        />
                        <div className='bg-lime-100 w-full h-11 rounded-full flex items-center'>
                            <input
                                type="search"
                                name="nearbyChargingSearch"
                                id="nearbyChargingSearch"
                                placeholder='Search for nearby charging stations'
                                className='w-10/12 h-full px-4 py-2 text-gray-700 bg-white border border-lime-300 rounded-full focus:outline-none focus:border-lime-500 focus:bg-white'
                            />
                            <div className='w-2/12 h-full flex items-center justify-center text-lime-600 hover:text-lime-800'>
                                <FaSearch />
                            </div>
                        </div>
                    </div>
                    <div className='w-7/12 h28 text-lime-700 flex items-center justify-end gap-12 font-semibold text-lg pr-10'>
                        <div>
                            <p className='hover:text-lime-200 transform duration-300 ease-in-out cursor-pointer'>
                                LOCATIONS
                            </p>
                        </div>
                        <div>
                            <p className='hover:text-lime-200 transform duration-300 ease-in-out cursor-pointer'>
                                ADS
                            </p>
                        </div>
                        <div>
                            <p className='hover:text-lime-200 transform duration-300 ease-in-out cursor-pointer'>
                                ADD
                            </p>
                        </div>
                        <div>
                            <p className='hover:text-lime-200 transform duration-300 ease-in-out cursor-pointer'>
                                CHATS
                            </p>
                        </div>
                        <div>
                            <p className='hover:text-lime-200 transform duration-300 ease-in-out cursor-pointer'>
                                PROFILE
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
//Navbar for medium screen view
function MdNav() {
    return (
        <nav className='w-full  h-24 bg-lime-400 flex justify-center items-center '>
            <div className='w-9/12 h-full  flex justify-between items-center'>
                <div className='w-2/12'>
                    <img
                        src={logo}
                        alt="EV logo"
                        className='h-16 w-16 rounded-full'
                    />
                </div>
                <div className='w-10/12 bg-lime-100 h-2/4 rounded-full flex items-center'>
                    <input
                        type="search"
                        name="nearbyChargingSearch"
                        id="nearbyChargingSearch"
                        placeholder='Search for nearby charging stations'
                        className='w-9/12 h-full px-4 py-2 text-gray-700 bg-white border border-lime-300 rounded-full focus:outline-none focus:border-lime-500 focus:bg-white'
                    />
                    <div className='w-3/12 h-full px-5 flex items-center gap-5 text-lime-700'>
                        <p className='text-lg'>Search</p>
                        <FaSearch />
                    </div>
                </div>
            </div>
        </nav>
    )
}
//Navbar for small screen view
function SmNav() {
    return (
        <nav className='w-full  h-24 bg-lime-400 flex justify-center items-center px-10'>
            <div className='w-full h-full  flex justify-between items-center'>
                <div className='w-2/12'>
                    <img
                        src={logo}
                        alt="EV logo"
                        className='h-16 w-16 rounded-full'
                    />
                </div>
                <div className='w-10/12 bg-lime-100 h-2/4 rounded-full flex items-center'>
                    <input
                        type="search"
                        name="nearbyChargingSearch"
                        id="nearbyChargingSearch"
                        placeholder='Search for nearby charging stations'
                        className='w-9/12 h-full px-4 py-2 text-gray-700 bg-white border border-lime-300 rounded-full focus:outline-none focus:border-lime-500 focus:bg-white'
                    />
                    <div className='w-3/12 h-full flex items-center justify-center gap-5 text-lime-700'>
                        <p className='text-lg'>Search</p>
                        <FaSearch />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const IndexNavbar = () => {
    return (
        <>

            <div className='md:hidden'>
                <SmNav />
            </div>

            <div className='hidden md:flex lg:hidden '>
                <MdNav />
            </div>

            <div className='hidden lg:flex'>
                <LgNav />
            </div>
        </>
    )
}

export default IndexNavbar