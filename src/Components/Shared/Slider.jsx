import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import './slider.css'

// Import Swiper styles
import 'swiper/css/bundle';


const Slider = () => {
    return (

        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} 
        >
            <SwiperSlide style={{ width: '300px' }}><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /></SwiperSlide>
            <SwiperSlide style={{ width: '56px' }}><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /></SwiperSlide>
            <SwiperSlide style={{ width: '56px' }}><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /></SwiperSlide>
        </Swiper>

    );
};

export default Slider;