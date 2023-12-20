import axios from 'axios';
import React, { useState } from 'react';
import { Bars } from 'react-loader-spinner';

const MyAddedMovies = () => {

    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false)


    // upload video to cloudinary server-------------------
    const uploadFile = async () => {
        // file data processing
        const data = new FormData();
        data.append("file", video)
        data.append("upload_preset", 'videos_preset')

        try {
            let api = `https://api.cloudinary.com/v1_1/dwlmmaoeq/video/upload`;
            const res = await axios.post(api, data)
            const { secure_url } = res.data;
            console.log(secure_url)
            return secure_url;

        } catch (error) {
            console.log(error)
        }
    }


    // handle submit video form --------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            //upload image file
            const videoUrl = await uploadFile('video')
            setVideo(null)
            setLoading(false)


        } catch (error) {
            console.log(error)
        }
    }

    // const inputRef = React.useRef();
    // const [source, setSource] = useState();
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const url = URL.createObjectURL(file);
    //     setSource(url);
    //     console.log(file)
    // }
    // const handleChoose = (event) => {
    //     inputRef.current.click();
    // };
    return (
        <div>


            {/* Video upload form------------------------------- */}
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setVideo((prev) => e.target.files[0])} type="file" id="file" accept='video/*'/>
                </div>
                <button type='submit'>Upload video</button>
            </form>


            {/* Loading icon ------------------------------ */}
            {
                loading && <Bars
                    height="50"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{marginLeft:'300px'}}
                    wrapperClass=""
                    visible={true}
                />
            }

            {/* <input
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
            )} */}
        </div>
    );
};

export default MyAddedMovies;