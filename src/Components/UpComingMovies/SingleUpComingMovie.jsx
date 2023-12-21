import React from 'react';
import MoviePlayer from '../Shared/MoviePlayer';

const SingleUpComingMovie = ({ singleUpcomingMovie }) => {

    return (
        // <div className=" w-48 h-56 border mt-10 rounded hover:scale-110 ">
        //     {/* <img className='object-fill w-48 h-56' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></img> */}
        //     <div className=''>
        //         <MoviePlayer singleRatedVideo={singleUpcomingMovie}></MoviePlayer>
        //     </div>
        // </div>

        <div className='rounded hover:scale-110 border'>
            <MoviePlayer singleRatedVideo={singleUpcomingMovie}></MoviePlayer>
        </div>
    );
};

export default SingleUpComingMovie;