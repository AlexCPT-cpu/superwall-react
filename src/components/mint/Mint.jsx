import { useState } from "react";
import MessageModal from "./component/modal";
import SecModal from "./component/secmodal";

export default function Mint() {
  const [metamaskopenModal, setmetamaskopenModal] = useState(false);
  function closeModals() {
    setmetamaskopenModal(false);
  }

  // const openNewModal =()=>{
  //     setmetamaskopenModals(true)
  // }
  const [openModal, setopenModal] = useState(false);
  //   const [metaMassModal,setmetaMassModal] = useState(false)
  function closeModal() {
    setopenModal(false);
  }
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-[1500px] w-[90%] mx-auto my-20"
    >
      <div className="flex flex-col lg:flex-row   lg:justify-between items-center w-full">
        <div className="lg:w-[45%] h-[215px] md:h-full relative lg:h-auto">
          <img
            className="rounded-md md:rounded-[40px] p-1 md:p-2 h-[215px] md:h-full"
            src="/assets/images/supassgif.gif"
            alt="gif"
          />
          <div className="absolute  w-full h-full left-0 top-0 ">
            <img
              className="w-full h-full "
              width={"100%"}
              height="100%"
              alt="neon"
              src="/assets/images/neonbanner.png"
            />
          </div>
        </div>
        <div className="lg:w-[45%] text-center pt-5 lg:pt-0">
          <div className=" ">
            <p className="text-5xl font-bold text-transparent   bg-clip-text bg-gradient-to-r to-[#FF566B] via-[#633CFD]  from-[#21E5F0]">
              Genesis Super
              <br /> Pass
            </p>
          </div>
          <p className="pt-6 text-lg font-normal  text-[#DFDFDF]">
            1111 Genesis Super Pass that will grant you access to the Superwall
            E2E & P2E Ecosystem which includes Social Media, NFT Marketplace,
            Launchpad, Custom Goods Market, Staking, future drops and more.
          </p>
          <div className="bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] p-1 rounded-full w-[288px] mx-auto mt-10">
            <div className="flex justify-between items-center bg-[#000000] py-4 px-4 rounded-full">
              <button
                disabled={counter <= 0}
                className="cursor-pointer"
                onClick={decrease}
              >
                <img src="/assets/images/minus.png" alt="minus" />
              </button>
              <div className="text-2xl bg-[#000000]">{counter}</div>
              <button className="cursor-pointer" onClick={increase}>
                <img src="/assets/images/sum.png" alt="sum" />
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center w-[45%] mx-auto pt-5">
            <div>
              <img src="/assets/images/eva_info.png" alt="eva_info" />
            </div>
            <div>
              <p className="text-base leading-[24px] font-medium text-[#C6C6C6]">
                1 NFT = 0.085 ETH
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer bg-gradient-to-r  from-[#FF566B] via-[#702CD5] to-[#21E5F0]  rounded-full  w-[50%] md:w-[20%] lg:w-[30%] mx-auto p-2 mt-5"
          >
            <p className="text-lg font-bold ">Mint</p>
          </div>
          <div className="flex justify-evenly items-center w-[50%] md:w-[20%] lg:w-[30%] mx-auto mt-5">
            <div>
              <img
                src="/assets/images/etherscan_circle.png"
                alt="etherscan_circle"
              />
            </div>
            <div>
              <img src="/assets/images/eth.png" alt="eth" />
            </div>
            <div>
              <a target='blank' href="https://twitter.com/superwallglobal"><img src="/assets/images/mintwit.png" alt="mintwit" /></a>
            </div>
            <div>
             <a href="/"> <img src="/assets/images/mintbrowser.png" alt="mintbrowser" /></a>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="w-full  flex justify-center  items-center ">
          <MessageModal
            openModal={openModal}
            closeModal={closeModal}
            setopenModal={setopenModal}
            openMetaMaskModal={() => setmetamaskopenModal(true)}
          />
        </div>
      )}
      {metamaskopenModal && (
        <div className="w-full  flex justify-center  items-center ">
          <SecModal openModal={metamaskopenModal} closeModal={closeModals} />
        </div>
      )}
    </div>
  );
}
