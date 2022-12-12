import React from 'react'

const SuperDeal = ({bgColor,styles}) => {
  return (
    <div className={`${bgColor || "bg-[#1F2634]"} pt-[43px] pb-[32px] px-7 rounded-[10.54px] ${styles}`}>
            <div className="flex text-center justify-center items-center">
              <p className="text-[22px] font-bold text-white leading-[26.58px] text-center">
                One Time
              </p>
              <p className="text-[26px] font-black text-[#623BFA] leading-[26.58px] text-center">
                &nbsp;Deal
              </p>
            </div>
            <p className="w-[224.05px] mx-auto font-normal text-sm leading-5 text-center pt-2">
              One Time Deal Only available to Super Pass Holders!
            </p>
            <div className="flex text-center justify-center items-center pt-12">
              <p className="font-semibold text-3xl leading-[37.41px] text-center">
                🎉
              </p>
              <p className="font-bold text-[17.57px] leading-[21.27px] text-center">
                {" "}
                Get 5 For The Price of 1
              </p>
            </div>
            <div className="w-[227.36px] mx-auto flex text-center justify-center items-center pt-6">
              <img src="/assets/images/logos_ethereum-color.png" alt="eth" />
              <p className="   font-bold text-[17.57px] leading-[21.27px] text-left ml-5 ">
                {" "}
                Total Combined Value in ETH Exceeds 1 ETH!
              </p>
            </div>
            <div className="rounded-xl  mt-12 bg-[#202633]">
              <div className="px-7 py-8">
                <p className="text-lg text-center leading-5 font-bold mt-7">
                  💎 Super Pass Holders
                </p>
                <p className="w-[270.32px] mx-auto text-lg text-center leading-5 font-bold mt-4">
                  🧱 Genesis Elemental Bricks Free Mint
                </p>
                <p className="text-lg text-center leading-5 font-bold mt-4">
                  🌎 SOW Free Mint
                </p>
              </div>
            </div>
          </div>
  )
}

export default SuperDeal