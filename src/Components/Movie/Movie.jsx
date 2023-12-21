import React, { useState } from 'react';
import MoviePlayer from '../Shared/MoviePlayer';
import { useLocation } from 'react-router-dom';

const Movie = () => {

    const [ratingNumber, setRatingNumber] = useState(0);

    const location = useLocation();
    const movieDetails = location.state.singleRatedVideo;



    const handleRatingRate = (e) => {
        const rating = +e.target.value + 1;
        setRatingNumber(rating)
    }

    console.log(ratingNumber)


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                {/* Movie  detailos section------------------------------ */}
                <div className="hero-content flex-col lg:flex-row-reverse cursor-pointer">
                    <div>
                        <MoviePlayer singleRatedVideo={movieDetails}></MoviePlayer>

                        {/* Rating parts------------------------------------ */}
                        <p>Ratings {ratingNumber} /5</p>
                        {
                            [...Array(5)].map((star, index) => {
                                return (
                                    <div className="rating my-3 " key={index}>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value={index} onClick={handleRatingRate}/>

                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Movie details ------------------------------------------- */}
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>

                {/* cast section ------------------------------------------ */}


            </div>
        </div>
    );
};

export default Movie;