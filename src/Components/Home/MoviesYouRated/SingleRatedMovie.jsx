import React from 'react';
import MoviePlayer from '../../Shared/MoviePlayer';
import { useNavigate } from 'react-router-dom';

const SingleRatedMovie = ({singleRatedVideo}) => {
    const navigate = useNavigate();

    // handle single movie details page-------------------
    const singMovieDetails = ()=>{
        navigate('/movie', {state: {singleRatedVideo}})
    }
    
    return (
        <div className="card card-compact sm:w-72">
            <MoviePlayer singleRatedVideo={singleRatedVideo} ></MoviePlayer>
            <div className="card-body bg-gray-600" onClick={singMovieDetails}>
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