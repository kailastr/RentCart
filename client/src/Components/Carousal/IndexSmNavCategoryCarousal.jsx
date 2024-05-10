import React, { useRef, useState } from 'react';

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
import { CgBookmark } from 'react-icons/cg';


const IndexSmNavCategoryCarousal = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='font-semibold'>Chategories</SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <FaMobileAlt />MobilePhone</div></SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <MdElectricBolt /> Electronics</div></SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <GiWoodenChair />Furniture </div></SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <PiDress />Fashion </div></SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <FaBook /> Book</div></SwiperSlide>
                <SwiperSlide><div className='flex justify-center items-center gap-1'> <MdSportsSoccer />Sports</div></SwiperSlide>
            </Swiper>
        </>
    )
}

export default IndexSmNavCategoryCarousal