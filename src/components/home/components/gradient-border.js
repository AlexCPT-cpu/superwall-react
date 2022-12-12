import React from 'react'

const GradientBorder = ({text}) => {
  return (
    <div className="bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] bg-[length:100%_6px]  pb-6 bg-no-repeat bg-bottom">
    <p className=" text-2xl md:text-5xl font-black leading-[42px] text-center ">{text}</p>
  </div>
  )
}

export default GradientBorder