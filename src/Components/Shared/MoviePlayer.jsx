import React from 'react';
import ReactPlayer from 'react-player';

const MoviePlayer = ({ singleRatedVideo }) => {
    const { videoUrl } = singleRatedVideo
    return (
        <div>
            <ReactPlayer
                className='react-player'
                // light={true}
                controls={true}
                url={videoUrl}
                width='100%'
                height='100%'
            />
        </div>
    );
};

export default MoviePlayer;