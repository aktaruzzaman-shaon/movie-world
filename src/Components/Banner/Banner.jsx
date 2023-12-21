import React from 'react';
import Slider from '../Shared/Slider';

const Banner = () => {

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">

                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                {/* movie slider--------------------------- */}
                <div className='flex-1 w-56'>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;