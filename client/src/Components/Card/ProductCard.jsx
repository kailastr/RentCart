import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className=' w-full '>
            <Link to={`Product/${props.id_}`}>
                <div className='m-2 p-2 border border-emerald-600 hover:shadow-lg hover:border-emerald-400 transition duration-200 ease-in-out cursor-pointer'>
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
                            <p>{props.location}</p>
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard