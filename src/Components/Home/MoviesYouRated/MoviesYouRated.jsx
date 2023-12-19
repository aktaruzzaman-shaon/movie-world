import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import './slider.css'

// Import Swiper styles
import 'swiper/css/bundle';
import SingleRatedMovie from './SingleRatedMovie';

const MoviesYouRated = () => {
    return (
        <div className='mt-10'>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={2}
                spaceBetween={50}
            >
                <SwiperSlide ><SingleRatedMovie></SingleRatedMovie></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MoviesYouRated;