import React, { useEffect, useState } from 'react';
import SingleUpComingMovie from './SingleUpComingMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import axios from 'axios';
import { Navigation } from 'swiper/modules';


const UpComingMovies = () => {
    const [allUpcomingMovies, setallUpcomingMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allMovie")
            .then(response => {
                setallUpcomingMovies(response.data)
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }, [])
    return (
        <div>
            <p className='font-bold text-2xl my-10'>Upcoming movies</p>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={3}
                spaceBetween={30}
            >
                {
                    allUpcomingMovies.map((singleUpcomingMovie, index) => <SwiperSlide key={index}><SingleUpComingMovie singleUpcomingMovie={singleUpcomingMovie}></SingleUpComingMovie></SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default UpComingMovies;