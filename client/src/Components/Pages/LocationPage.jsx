import React from 'react';

//image
import mapImg from '../../images/mapImg.png'
import locationImg from '../../images/locationImg.jpg'

const LocationPage = () => {

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            alert(`Lat : ${latitude} and Long : ${longitude}`);
        }, (error) => {
            console.error('Error getting location:', error);
        });
    }

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className=' w-4/6 h-5/6 border-2 border-emerald-400 rounded-md '>
                    <h1 className=' text-3xl text-center mt-10 underline decoration-emerald-400'>Location Permission</h1>
                    <div className='w-full h-5/6 flex items-center justify-center'>
                        <div className=' w-5/6 h-5/6 bg-cover bg-center rounded-lg drop-shadow-xl relative' style={{ backgroundImage: `url(${mapImg})` }}>
                            <div className='absolute inset-0 bg-black opacity-60 rounded-lg'></div>
                            <div className='relative z-10'>
                                <div className='flex items-center justify-center mt-10'>
                                    <div className=' w-28 h-28 rounded-lg overflow-hidden flex items-center justify-center'>
                                        <img src={locationImg} alt="Location Logo" />
                                    </div>
                                </div>
                                <p className=' text-center mt-2 text-white text-xl'>We need Your Current Location</p>
                                <div className='w-full flex items-center justify-center'>
                                    <div className=' w-1/2'>
                                        <p className='text-center text-gray-300 text-sm'>Location will be used for finding Ad's near you. We will be asking you for a locaiton permission also</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-center my-5'>
                                    <div className='w-1/3'>
                                        <button
                                            className='bg-white hover:bg-emerald-100 transition duration-200 ease-in-out w-full py-2 rounded-md my-2'
                                            onClick={getLocation}
                                        >
                                            Get My Location
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className=' text-center text-gray-700 font-semibold -mt-5'>A Product from V B C Developers </p>
                </div>
            </div>
        </>
    )
}

export default LocationPage