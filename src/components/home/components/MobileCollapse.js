import React, { useState } from "react";

import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
const Collapseble = ({ heading, imgsrc, imgWidth, firstitems, firstimage }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mt-10 p-2">
      <div className="  shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] rounded-[40px] ">
        <div
          className={`relative  ${
            open ? "rounded-t-[30px]" : "rounded-[30px]"
          }   p-0 md:p-1`}
        >
          <div className="z-[-1] flex w-full  justify-between items-center bg-[#202633] shadow-[1px_4px_70px_15px_rgba(112,44,213,10)] rounded-xl md:rounded-[30px]">
            <div className="flex items-center ">
              <div className="pl-0 lg:pl-10 ">
                <img className={imgWidth} src={imgsrc} alt="superdeakneon " />
              </div>
              <p className="text-[12px] md:text-[26px] pl-6 font-bold leading-[22px] text-white ml-8 ">
                {heading}
              </p>
            </div>
            <div className="pr-10 z-10">
              <button
                type="button"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? (
                  <img src="/assets/images/arrup.png" alt="arrup " />
                ) : (
                  <img src="/assets/images/arrdown.png" alt="arrdown " />
                )}
              </button>
            </div>
          </div>
          <div className="absolute h-full w-full top-0 ">
              <img
                className="w-full h-full "
                width={"100%"}
                height="100%"
                alt="neon"
                src="/assets/images/collapse.png"
              />
            </div>
        </div>
        <div>
          <Collapsible open={open}>
            <div className="relative pl-0 md:pl-1.5 md:mt-[-2] sm:mt-0 w-[100.1%] rounded-b-[-30px]  h-full -mt-[5px] ">
              
            <div className="flex flex-col lg:flex-row lg:justify-between items-start  rounded-b-[30px] rounded-r-[30px] rounded-t-[30px] lg:items-center bg-[#202633] ">
                {firstitems ? (
                  <div className="w-[95%] md:w-[70%] mx-5 my-10">
                    <p className="text-lg md:text-2xl pl-5 font-semibold">
                      Super Pass = 1 Free GEB Mint
                    </p>
                    <p className="text-[17px] md:text-[22px] pl-5 font-medium mt-2">
                      Free Mint Terms & Conditions:{" "}
                    </p>
                    <p className="text-[12px] md:text-lg  pl-5 font-medium flex ">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      Super Pass Must be Delisted or listed above 1 Eth.
                    </p>
                    <p className="text-[12px] md:text-lg  pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      1st snapshot of holders will be taken 2 weeks after Mint
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      2nd snapshot of holders to be taken before GEB Mint.{" "}
                    </p>
                    <p className="text-[12px] md:text-lg  pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      If bought from Secondary Market, Holder can claim GEB OG
                      Role and get 50% Discount on mint.
                    </p>
                    <p className="text-[11px] md:text-sm  pl-5 font-normal hidden md:block">
                      *2nd snapshot date and time TBD
                    </p>
                    <p className="text-[11px] md:text-sm  pl-5 font-normal hidden md:block">
                      **Current Holder Screenshot will be taken and used to
                      identify the holders who will be eligible for the 50%
                      discount{" "}
                    </p>

                    <div className="w-[90%] flex justify-between pl-5 items-center md:hidden mt-2">
                      <div className="">
                        <p className="text-[11px] md:text-sm pl-5 font-normal">
                          *2nd snapshot date and time TBD
                        </p>
                        <p className="text-[11px] md:text-sm pl-5 font-normal">
                          **Current Holder Screenshot will be taken and used to
                          identify the holders who will be eligible for the 50%
                          discount{" "}
                        </p>
                      </div>
                      <div className="sm:ml-10">
                        <img src="/assets/images/rocks.png" alt="rocks" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[95%] md:w-[70%] mx-2 my-5 lg:mx-5 lg:my-10">
                    <p className="text-lg md:text-2xl pl-5 font-semibold">
                      Super Pass = 1 Free GEB Mint
                    </p>
                    <p className="text-[17px] md:text-[22px] pl-5 font-medium mt-2">
                      Free Mint Terms & Conditions:{" "}
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex ">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      The originial minter must be in possession of their Super
                      Pass
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      Hard Stake your GEB using the Pylons provided on our GEB
                      Staking Site
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Staked GEB will reward $BRCK + Elemental Brick Fragments
                      to holders every week
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders must collect Elemental Brick Fragments and
                      complete all 6 Elemental Bricks
                    </p>
                    <p className="text-[12px] md:text-lg  pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Staked GEB will reward $BRCK + Elemental Brick Fragments
                      to holders every week
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders may stake and unstake freely but the longer you
                      stake, better the rewards.
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders must collect Elemental Brick Fragments and
                      complete all 6 Elemental Bricks.
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      All 6 Elemental Bricks will be used on Interactive SOW
                      Minting Site to summon a SOW.
                    </p>
                    <p className="text-[12px] md:text-lg pl-5 font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      If a Super Pass is bought from the Secondary Market, the
                      holder will be able to claim a OG Role for SOW and will
                      recieve a 50% Discount during mint.
                    </p>
                    <p className="text-[11px] md:text-sm pl-5 font-normal hidden md:block">
                      *Current Holder Screenshot will be taken and used to
                      identify the holders who will be eligible for the 50%
                      discount{" "}
                    </p>

                    <div className="w-[90%] flex justify-between  items-center md:hidden mt-2">
                      <div>
                        {" "}
                        <p className="text-[11px] md:text-sm pl-5 font-normal">
                          *Current Holder Screenshot will be taken and used to
                          identify the holders who will be eligible for the 50%
                          discount{" "}
                        </p>
                      </div>
                      <div className="sm:ml-12">
                        {" "}
                        <img src="/assets/images/sowartwork.png" alt="rocks" />
                      </div>
                    </div>
                  </div>
                )}
                {firstimage ? (
                  <div className="hidden md:block sm:px-4 md:mr-10">
                    <img src="/assets/images/rocks.png" alt="rock " />
                  </div>
                ) : (
                  <div className="hidden md:block  mr-6">
                    <img
                      src="/assets/images/sowartwork.png"
                      alt="sowartwork "
                    />
                  </div>
                )}
              </div>

                
              <div className="absolute object-contain md:w-[99.6%] md:h-[110%] sm:w-[100.1%] sm:h-[107%] right-[-0.1%] bottom-[-1%]  duration-1000">
              <img
                className="w-full h-full  "
                width={"100%"}
                height="100%"
                alt="neon"
                src="/assets/images/carack-1.png"
              />
              
            </div>
            </div>
          </Collapsible>
        </div>
      </div>
      
    </div>
  );
};

export default Collapseble;
