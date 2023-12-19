import React from 'react';

const Banner = () => {

    return (

        <div className='min-w-full bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className="hero w-auto min-h-min" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-lg rounded-lg shadow-2xl mx-auto" />
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