import React from 'react'
import Button from './Button'

const buttonList = ["All", "Gaming", "Songs", "Live", "Trending", "Soccer", "Cooking", "Cricket", "Valentines","DataType","Mixes","Kapil Sharma"];
const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonList.map((name,index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList