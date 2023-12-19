import React from 'react';

const SingleRatedMovie = () => {
    return (
        <div className="card card-compact sm:w-56 md:w-64">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className='w-56 md:w-64' /></figure>
            <div className="card-body bg-gray-600">
                <h2 className="card-title">JOKER</h2>
                <p>Rated 5</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Watch List</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRatedMovie;