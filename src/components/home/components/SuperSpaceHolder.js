import React from 'react'

const SuperSpaceHolder = () => {
  return (
      <div className='relative supa object-cover  '>
        <div className=' bg-[#202633]     rounded-xl sm:rounded-[50px] md:rounded-[68px] ] '>
          <img className=' mx-auto   bottom-4  ' src='/assets/images/superdealneon.png' alt='superdeakneon'/>
          <p className=' relative bottom-10 supa sm:text-[15px] mb-10 pt-6 md:text-[25px] leading-[21.5px] text-center poppinfont    text-white'>🔥 “Get 3 For The Price Of 1” 🔥</p>
          <p className=' relative bottom-8 supa sm:text-[15px] md:text-[23px] leading-[21.5px] text-center poppinfont mb-10 text-white'>Super Pass  -{'>'}   Genesis Elemental Bricks  -{'>'}   Some Other World</p>
          <p className='font-lato relative  supa pb-6 bottom-8 sm:text-[20px] font-normal  text-lg md:text-[34px] text-center  text-white  racingfont mx-2'>Total  combined  value  of  Nearly  1  Eth!</p>
        </div>
        <div className="absolute w-full h-full top-0 " >
        <img className="w-full h-full  md:h-['100%'] md:w-{'100%'} " alt="neon" src='/assets/images/superdealneons.png'/>
        </div>
      </div>
      
  )
}



export default SuperSpaceHolder