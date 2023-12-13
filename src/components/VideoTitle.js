import React from 'react'


const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video  '>
      <h1 className='text-5xl font-bold'>{title} </h1>
      <p className='py-6 text-lg w-1/4'>{overview} </p>
      <div>
      <button className='bg-white text-black p-4 px-12 text-xl rounded-lg font-medium hover:bg-opacity-70 '>Play</button>
      <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-70 rounded-lg mx-3 font-medium hover:bg-opacity-40'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle