import React, { useRef, useState } from 'react';

//swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';


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
                <SwiperSlide>Car</SwiperSlide>
                <SwiperSlide>Motocycle</SwiperSlide>
                <SwiperSlide>MobilePhone</SwiperSlide>
                <SwiperSlide>Electronics</SwiperSlide>
                <SwiperSlide>Furniture</SwiperSlide>
                <SwiperSlide>Book</SwiperSlide>
                <SwiperSlide>Sports</SwiperSlide>
            </Swiper>
        </>
    )
}

export default IndexSmNavCategoryCarousal