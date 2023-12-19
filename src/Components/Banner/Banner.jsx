import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';

// import required modules

const Banner = () => {

    return (

        <div className='min-w-full '>
            <div className="hero w-auto min-h-min" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                       


                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Banner;