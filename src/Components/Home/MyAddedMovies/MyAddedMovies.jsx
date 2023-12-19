import React, { useState } from 'react';

const MyAddedMovies = () => {
    const inputRef = React.useRef();
    const [source, setSource] = useState();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
        console.log(file)
    }
    const handleChoose = (event) => {
        inputRef.current.click();
    };
    return (
        <div>
            <input
                ref={inputRef}
                className="VideoInput_input"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
            />
            {!source && <button onClick={handleChoose}>Choose</button>}
            {source && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height="400"
                    controls
                    src={source}
                />
            )}
        </div>
    );
};

export default MyAddedMovies;