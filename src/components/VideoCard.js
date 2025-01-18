import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle , title, thumbnails} = snippet;
  return (
    <div className='p-2 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-200'>
        <img className='rounded-lg w-full h-auto' alt='thumbnails' src={thumbnails.medium.url} />
        <ul className='mt-2'>
            <li className='font-bold text-sm line-clamp-2'>{title}</li>
            <li className='text-xs text-gray-600'>{channelTitle}</li>
            <li className='text-xs text-gray-500'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard