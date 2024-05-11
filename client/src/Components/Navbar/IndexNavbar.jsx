import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/Logo.png';

//icons
import { FaSearch, FaBook, FaMobileAlt } from "react-icons/fa";
import { MdElectricBolt, MdSportsSoccer } from "react-icons/md";
import { GiWoodenChair } from "react-icons/gi";
import { PiDress } from "react-icons/pi";

//carousal
import IndexMdNavCategoryCarousal from '../../Components/Carousal/IndexMdNavCategoryCarousal';
import IndexSmNavCategoryCarousal from '../../Components/Carousal/IndexSmNavCategoryCarousal';

//Navbar for large screen view
function LgNav() {
    return (
        <>
            <nav className='w-full'>
                <div className='w-full h-28 px-10'>
                    <div className='flex justify-between gap-5'>
                        <div className=' w-5/12 h-28 flex items-center gap-7'>
                            <img
                                src={logo}
                                alt="EV logo"
                                className='h-28'
                            />
                            {/* search section */}
                            <div className='bg-emerald-100 w-full h-11  flex items-center'>
                                <input
                                    type="search"
                                    name="nearbyChargingSearch"
                                    id="nearbyChargingSearch"
                                    placeholder='Search for what you want to Rent..'
                                    className='w-10/12 h-full px-4 py-2 text-gray-700 bg-white border border-emerald-300  focus:outline-none focus:border-emerald-500 focus:bg-white'
                                />
                                <div className='w-2/12 h-full flex items-center justify-center text-emerald-600 hover:text-emerald-800'>
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                        {/* navigation section */}
                        <div className='w-7/12 h28 text-emerald-500 flex items-center justify-end gap-12 font-semibold text-lg pr-10'>
                            <div>
                                <Link to={'/RentCart/'} className='hover:text-emerald-300 transform duration-300 ease-in-out cursor-pointer'>
                                    LOCATIONS
                                </Link>
                            </div>
                            <div>
                                <Link to={'/RentCart/'} className='hover:text-emerald-300 transform duration-300 ease-in-out cursor-pointer'>
                                    ADS
                                </Link>
                            </div>
                            <div>
                                <Link to={'/RentCart/AddNewRental'} className='hover:text-emerald-300 transform duration-300 ease-in-out cursor-pointer'>
                                    ADD
                                </Link>
                            </div>
                            <div>
                                <Link to={'/RentCart/AddNewRental'} className='hover:text-emerald-300 transform duration-300 ease-in-out cursor-pointer'>
                                    CHATS
                                </Link>
                            </div>
                            <div>
                                <Link to={'/RentCart/Profile'} className='hover:text-emerald-300 transform duration-300 ease-in-out cursor-pointer'>
                                    PROFILE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Chategories section */}
                <div className='w-full h-8 bg-gradient-to-r from-white to-emerald-200 border-t border-emerald-400 shadow-md'>
                    <div className='w-full flex justify-center items-center gap-5'>
                        <p className='font-semibold'>Chategories : </p>
                        <Link to={'Mobile'}><p className='flex items-center justify-center gap-1 hover:text-emerald-600'> <FaMobileAlt />Mobile Phone</p></Link>
                        <Link to={'Electronics'}><p className='flex items-center justify-center gap-1  hover:text-emerald-600'> <MdElectricBolt /> Electronics</p></Link>
                        <Link to={'Furniture'}><p className='flex items-center justify-center gap-1  hover:text-emerald-600'> <GiWoodenChair /> Furnitures</p></Link>
                        <Link to={'Fashion'}><p className='flex items-center justify-center gap-1  hover:text-emerald-600'> < PiDress /> Fashion</p></Link>
                        <Link to={'Book'}><p className='flex items-center justify-center gap-1  hover:text-emerald-600'> <FaBook /> Book</p></Link>
                        <Link to={'Sports'}><p className='flex items-center justify-center gap-1  hover:text-emerald-600'> <MdSportsSoccer /> Sports</p></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
//Navbar for medium screen view
function MdNav() {
    return (
        <nav className='w-full'>
            <div className='w-full  h-24 flex justify-center items-center'>
                <div className='w-9/12 h-full  flex justify-between items-center gap-5'>
                    <div className='w-2/12'>
                        <img
                            src={logo}
                            alt="EV logo"
                            className='w-28'
                        />
                    </div>
                    <div className='w-10/12 bg-emerald-100 h-2/4  flex items-center'>
                        <input
                            type="search"
                            name="nearbyChargingSearch"
                            id="nearbyChargingSearch"
                            placeholder='Search for what you want to Rent..'
                            className='w-9/12 h-full px-4 py-2 text-gray-700 bg-white border border-emerald-300  focus:outline-none focus:border-emerald-500 focus:bg-white'
                        />
                        <div className='w-3/12 h-full px-5 flex items-center gap-5 text-emerald-700'>
                            <p className='text-lg'>Search</p>
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-8 bg-emerald-50 border-t border-emerald-400 shadow-md flex justify-center items-center'>
                <div className='w-11/12'>
                    <IndexMdNavCategoryCarousal />
                </div>
            </div>
        </nav>
    )
}
//Navbar for small screen view
function SmNav() {
    return (
        <nav className='w-full'>
            <div className='w-full  h-24 flex justify-center items-center px-5'>
                <div className='w-full h-full  flex justify-between items-center gap-2'>
                    <div className='w-3/12'>
                        <img
                            src={logo}
                            alt="EV logo"
                            className='w-28'
                        />
                    </div>
                    <div className='w-9/12 bg-emerald-100 h-2/4 flex items-center'>
                        <input
                            type="search"
                            name="nearbyChargingSearch"
                            id="nearbyChargingSearch"
                            placeholder='Search for what you want to Rent..'
                            className='w-10/12 h-full px-4 py-2 text-gray-700 bg-white border border-emerald-300 focus:outline-none focus:border-emerald-500 focus:bg-white'
                        />
                        <div className='w-2/12 h-full flex items-center justify-center gap-5 text-emerald-700'>
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-8 bg-emerald-50 border-t border-emerald-400 shadow-md flex items-center justify-center'>
                <div className='w-11/12'>
                    <IndexSmNavCategoryCarousal />
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