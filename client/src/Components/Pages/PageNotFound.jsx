import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { GoHome } from "react-icons/go";

//image
import PageNotFoundImg from '../../images/PageNotFound.jpg';

const PageNotFound = () => {
    return (
        <>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='w-8/12 h-2/3 border-2 border-emerald-400'>
                    <h1 className='text-3xl text-center text-emerald-800 my-2'>Oops .. Page Not Found !!</h1>
                    <div className='w-full h-2/3 flex items-center justify-center'>
                        <img src={PageNotFoundImg} alt=" Page Not Found Img" className=' h-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to={'/RentCart'} >
                            <button
                                className=' border-2 border-emerald-600 px-3 py-2 hover:border-emerald-400 hover:bg-emerald-50 transition duration-200 ease-in-out flex items-center justify-center gap-2 text-lg'>
                                <GoHome /> Return Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound