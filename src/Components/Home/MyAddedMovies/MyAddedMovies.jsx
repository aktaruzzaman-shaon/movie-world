import React, { useState } from 'react';

const MyAddedMovies = () => {


const [form,setFrom] = useState({
    title:"",
    discription: "",
    file:null
})

const handleChange = (event)=>{
    const inputValue = event.target.name === "file" ? event.target.files[0] : event.target.value;
    setFrom({
        ...form,
        [event.target.name] : inputValue
    })
}

 const handleSubmit = (event)=>{
    event.preventDefault();
    console.log({form})
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

            <form action="" onSubmit={handleSubmit}>
                <div className='my-5'>
                    <input onChange={handleChange} type="text" name="title" autoComplete='off' placeholder='title' />
                </div>
                <div>
                    <textarea onChange={handleChange} type="text" name="description" autoComplete='off' placeholder='description' />
                </div>
                <div>
                    <input onChange={handleChange} type="file" name="file" accept='video/mp4' placeholder='Add video file'/>
                </div>
                <button type='submit'>Upload video</button>
            </form>













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