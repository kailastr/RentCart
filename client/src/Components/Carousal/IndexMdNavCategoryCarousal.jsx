import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

//icons
import { FaBook, FaMobileAlt } from "react-icons/fa";
import { MdElectricBolt, MdSportsSoccer } from "react-icons/md";
import { GiWoodenChair } from "react-icons/gi";
import { PiDress } from "react-icons/pi";

//swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';


const IndexMdNavbarCategoryCarousal = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='font-semibold'>Chategories</SwiperSlide>
                <SwiperSlide><Link to={'Mobile'} className='flex justify-center items-center gap-1'> <FaMobileAlt />MobilePhone</Link ></SwiperSlide>
                <SwiperSlide><Link to={'Electronics'} className='flex justify-center items-center gap-1'> <MdElectricBolt /> Electronics</Link></SwiperSlide>
                <SwiperSlide><Link to={'Furniture'} className='flex justify-center items-center gap-1'> <GiWoodenChair />Furniture </Link></SwiperSlide>
                <SwiperSlide><Link to={'Fashion'} className='flex justify-center items-center gap-1'> <PiDress />Fashion </Link></SwiperSlide>
                <SwiperSlide><Link to={'Book'} className='flex justify-center items-center gap-1'> <FaBook /> Book</Link></SwiperSlide>
                <SwiperSlide><Link to={'Sports'} className='flex justify-center items-center gap-1'> <MdSportsSoccer />Sports</Link></SwiperSlide>
            </Swiper>
        </>
    )
}

export default IndexMdNavbarCategoryCarousal