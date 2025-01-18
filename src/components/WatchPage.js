import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'; 
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  })
  return (

    <div className="flex justify-center items-center px-5 py-10 w-[65%]">
    {/* Responsive container for the iframe */}
    <div className="w-full max-w-7xl aspect-video">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  )
}

export default WatchPage