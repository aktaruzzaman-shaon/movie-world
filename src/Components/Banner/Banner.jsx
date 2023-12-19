import React from 'react';
import Slider from '../Shared/Slider';


// import required modules

const Banner = () => {

    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className='flex-1 w-50'>
                    <div className="mx-auto w-48">
                        <Slider></Slider>
                    </div>
                </div>

            </div>
        </div>


        // <div className='flex '>
        //     <div className='flex-1'>hello</div>
        //     <div className='flex-1 mx-auto'>
        //         <div className="mx-auto w-48">
        //             <Slider></Slider>
        //         </div>
        //     </div>
        // </div>



    );
};

export default Banner;