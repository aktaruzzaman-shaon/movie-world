import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
import SingleRatedMovie from './SingleRatedMovie';
import axios from 'axios';

const MoviesYouRated = () => {

    const [allRatedVideo, setAllRatedVideo] = useState([]);

    // load data---------------------------
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
            <p className='font-bold text-2xl my-10'>Movies you rated</p>

            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    allRatedVideo.map((singleRatedVideo, index) => <SwiperSlide key={index}><SingleRatedMovie singleRatedVideo={singleRatedVideo} ></SingleRatedMovie></SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default MoviesYouRated;