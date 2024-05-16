import React from 'react';

//icons
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const AdsCard = (props) => {
    return (
        <div className=' w-full '>
            <div className='m-2 p-2 border bg-gradient-to-tr from-red-50 to-red-100  border-emerald-600 hover:shadow-lg hover:border-emerald-400 transition duration-300 ease-in-out cursor-pointer' style={{ backgroundColor: 'gradient' }}>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-11/12 h-40 bg-cover bg-center rounded-md' style={{ backgroundImage: `url(${props.image})` }} />
                </div>
                <div className='px-3 py-1'>
                    <h2 className=' text-lg underline decoration-emerald-400'>{props.title}</h2>
                    <h3 className='font-semibold'>Price : ₹ {props.price} </h3>
                    <p className='text-gray-600'>
                        {props.description}
                    </p>
                    <div className='w-full flex items-center justify-between text-gray-500 text-sm mt-2'>
                        <button className='flex items-center justify-center gap-1 px-2 py-1 font-semibold bg-blue-400 hover:bg-blue-500 text-white transition duration-200 ease-in-out '> <MdOutlineEdit /> Edit</button>
                        <button className='flex items-center justify-center gap-1 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 text-white transition duration-200 ease-in-out '> <MdDeleteOutline /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsCard