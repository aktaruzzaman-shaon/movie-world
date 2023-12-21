import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
import SingleRatedMovie from './SingleRatedMovie';
import axios from 'axios';

const MoviesYouRated = () => {

    const [allRatedVideo, setAllRatedVideo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allMovie")
            .then(response => {
                setAllRatedVideo(response.data)
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className='mt-10'>

            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={3}
                spaceBetween={30}
            >
                {
                    allRatedVideo.map((singleRatedVideo, index) => <SwiperSlide key={index}><SingleRatedMovie singleRatedVideo={singleRatedVideo} ></SingleRatedMovie></SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default MoviesYouRated;