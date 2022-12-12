import { TeamMemberData } from "constant/team_member";
import React from "react";

const TeamMembers = () => {
  return (
    <>
      {TeamMemberData.map((items, index) => (
        <div className="  rounded-[30px] " key={index}>
          <div className=" flex justify-center relative items-center w-28 h-28 md:w-[182px] md:h-[182px] mx-auto  rounded-full  mt-[-63px] ">
            <div className="bg-[#1F2634] p-3 w-24 h-24 md:w-44 md:h-44 mx-auto rounded-full">
              <img src={items.imgsrc} alt="tiger" />
            </div>
            <div className="absolute w-full h-full top-0" >
        <img className="w-full h-full " width={'100%'} height='100%' alt="neon" src='/assets/images/nenoteam.png'/>
        </div>
          </div>
          <div className="flex justify-center items-center text-center pt-7">
            <a href={items.twittersrc}>
              <img
                className="cursor-pointer w-[25px]"
                src="/assets/images/twitterlogo.png"
                alt="tiger"
              />
            </a>
            <a href={items.instaersrc}>
              <img
                className="cursor-pointer w-[25px] ml-2"
                src="/assets/images/instalogo.png"
                alt="tiger"
              />
            </a>
            {/* sadasasdasdasdas */}
            <a href={items.linkdinlogo}>
              <img
                className="cursor-pointer w-[25px] ml-2"
                src="/assets/images/linkdinlogo.png"
                alt="tiger"
              />
            </a>
          </div>
          <p className="text-[22px] md:text-[32px] leading-[48px] text-[#F8F8F8] font-semibold pt-3 text-center">
            {items.name}
          </p>
          <p className="text-[#A7A7A7] leading-[21px] text-center text-sm font-normal pt-2">
            {items.position}
          </p>
          <p className="text-[#A7A7A7] leading-[21px] text-center text-sm font-normal py-2">
            {items.loacation}
          </p>
          
        </div>
      ))}
    </>
  );
};

export default TeamMembers;
