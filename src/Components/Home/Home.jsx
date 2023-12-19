import React from 'react';
import Banner from '../Banner/Banner';
import UpComingMovies from '../UpComingMovies/UpComingMovies';
import MoviesYouRated from './MoviesYouRated/MoviesYouRated';
import MyAddedMovies from './MyAddedMovies/MyAddedMovies';

const Home = () => {
    return (
        // ALL home components 
        <>
            <Banner></Banner>
            <UpComingMovies></UpComingMovies>
            <MoviesYouRated></MoviesYouRated>
            <MyAddedMovies></MyAddedMovies>
        </>
    );
};

export default Home;