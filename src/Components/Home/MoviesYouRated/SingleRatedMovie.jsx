import React from 'react';
import MoviePlayer from '../../Shared/MoviePlayer';

const SingleRatedMovie = ({singleRatedVideo}) => {
    
    return (
        <div className="card card-compact sm:w-64">
            <MoviePlayer singleRatedVideo={singleRatedVideo} ></MoviePlayer>
            <div className="card-body bg-gray-600">
                <h2 className="card-title">JOKER</h2>
                <p>Rated 5</p>
                <div className=" justify-center">
                    <button className="btn btn-primary">Watch List</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRatedMovie;