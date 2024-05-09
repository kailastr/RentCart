import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//icons 
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductPage = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // const handleThumbsSwiper = (swiper) => {
    //     setThumbsSwiper(swiper);
    // };

    const ProductDetails = {
        id_: "2255",
        title: "OnePlus nord 2",
        sellerName: "Alex",
        sellerLocation: "Trivandrum",
        description: "Good Condition, 1 year used",
        price: "10,000",
        images: ["https://assets.mspimages.in/c/tr:h-305,t-true/22196-70-1.jpg", "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg", "https://i.gadgets360cdn.com/large/oneplus_nord_ce4_main_big_ndtv_1711965398244.jpg", "https://www.businessinsider.in/photo/83508015/oneplus-nord-ce-5g-review.jpg", "https://www.businessinsider.in/photo/83195394/Master.jpg", "https://static.toiimg.com/thumb/resizemode-4,msid-83417446,width-1200,height-900/83417446.jpg"],
        location: "Kerala, Kochi",
        date: "Man 23",
    };

    return (
        <>
            <div className='w-full h-screen my-10 flex items-center justify-center'>
                <div className='w-11/12 h-full'>
                    <h1 className='text-3xl'>Product Details</h1>
                    <div className='w-full h-full flex lg:flex-row md:flex-col sm:flex-col justify-between gap-1 p-1'>
                        {/* swiper section */}
                        <div className='lg:w-7/12 md:w-full sm:w-full h-4/5 border border-emerald-600 m-2'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="w-full h-full bg-black flex items-center justify-center"
                            >
                                {ProductDetails.images.map((image, index) => (
                                    <SwiperSlide key={index} className='flex justify-center items-center'>
                                        <img src={image} alt="product Image" className='my-auto mx-auto h-full' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* <Swiper
                                onSwiper={() => setThumbsSwiper('active')}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="h-1/5 py-1"
                            >
                                {ProductDetails.images.map((image, index) => (
                                    <SwiperSlide>
                                        <img src={image} alt="product Image" key={index} className='my-auto' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            */}
                        </div>
                        {/* details section */}
                        <div className='lg:w-5/12 md:w-full sm:w-full p-2 flex flex-col items-center gap-2'> 
                            <div className='w-full border border-emerald-400 p-2'>
                                <div className='w-full'>
                                    <h1 className='text-xl underline decoration-emerald-400'>{ProductDetails.title}</h1>
                                    <p className='text-lg font-semibold'>Price : ₹ {ProductDetails.price}</p>
                                    <p className='text-gray-600'>{ProductDetails.description}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 px-2'>
                                    <p className='flex  justify-center items-center gap-2'> <IoLocationOutline /> {ProductDetails.location}</p>
                                    <p className='flex justify-center items-center gap-2'> < MdOutlineDateRange />{ProductDetails.date}</p>
                                </div>
                            </div>
                            <div className='w-full border border-emerald-400 p-2'>
                                <div className='w-full'>
                                    <h1 className='text-xl underline decoration-emerald-400'>Seller Details</h1>
                                    <p className='text-lg font-semibold'>Name : {ProductDetails.sellerName}</p>
                                    <p className='text-gray-600'>Location : {ProductDetails.sellerLocation}</p>
                                </div>
                                <div className='w-full my-5 flex items-center justify-center'>
                                    <button className=' bottom-0 w-10/12 items-center py-3 bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition duration-200 ease-in-out'> Chat with the Seller</button>
                                </div>
                            </div>
                            <div className='w-full border border-emerald-400 p-2'>
                                <div className='w-full'>
                                    <h1 className='text-xl underline decoration-emerald-400'>{ProductDetails.title}</h1>
                                    <p className='text-lg font-semibold'>Price : ₹ {ProductDetails.price}</p>
                                    <p className='text-gray-600'>{ProductDetails.description}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 px-2'>
                                    <p className='flex  justify-center items-center gap-2'> <IoLocationOutline /> {ProductDetails.location}</p>
                                    <p className='flex justify-center items-center gap-2'> < MdOutlineDateRange />{ProductDetails.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage