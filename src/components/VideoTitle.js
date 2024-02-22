import React from 'react'

const VideoTitle = (props) => {
    const{title,overview}=props;
    console.log(overview);
  return (
    <div className='w-screen aspect-video pt-96 px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold text-white'>{title}</h1>
        <p className='w-1/4 py-4 text-white'>{overview}</p>
        <div>
            <button className='text-black border border-t-2 border-gray-800 bg-white font-bold m-2 px-6 py-1 rounded-lg hover:px-8 hover:m-1 hover:py-2 hover:bg-opacity-80'> ▶ Play</button>
            <button className='bg-gray-500 border border-t-2 border-gray-800 text-white font-bold m-2 px-6 py-1 rounded-lg hover:px-8 hover:m-1 hover:py-2 bg-opacity-80'> ℹ More info</button>
        </div>
    </div>
  );
};

export default VideoTitle;