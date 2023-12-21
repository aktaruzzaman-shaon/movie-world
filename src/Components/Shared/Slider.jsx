import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import axios from 'axios';
import { Navigation } from 'swiper/modules';
import MoviePlayer from './MoviePlayer';

const Slider = () => {

    // load data --------------------------------------
    const [allMovies, setallMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allMovie")
            .then(response => {
                setallMovies(response.data)
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }, [])


    return (
        <div className=''>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}

            >
                {
                    allMovies.map((singleMovie, index) => <SwiperSlide key={index}><MoviePlayer singleRatedVideo={singleMovie}></MoviePlayer></SwiperSlide>)
                }


            </Swiper>
        </div>

    );
};

export default Slider;