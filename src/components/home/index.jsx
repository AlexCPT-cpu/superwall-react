import Button from "components/common/button";
import { FaqData } from "constant/faq_data";
import React from "react";
import Collapseble from "./components/Collapseble";
import Counter from "./components/counter";
import Faq from "./components/Faq";
import GradientBorder from "./components/gradient-border";
import NftSeries from "./components/nft-series";
import SuperSpaceHolder from "./components/SuperSpaceHolder";
// import SuperDeal from "./components/super-deal";
import TeamMembers from "./components/team-members";
import { useReactCountdown } from "./components/timer";
import UtilityPerk from "./components/utility-perk";
import { UtilityPerkData } from "constant/utility_perk";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      
      index,
      active,
      carouselState: { currentSlide,  },
    } = rest;
    console.log(currentSlide);
    const carouselItems = [
      // <div className="w-9 mx-2 h-2  bg-gradient-to-r from-[#54E0ED] via-[#5B2DED] to-[#DB1E71]  rounded-full">
      // </div>,
      // <div className="w-2 mx-2 h-2  bg-gray rounded-full">
      // </div>,
      // <div className="w-2 h-2  bg-gray rounded-full">
      // </div>,
    ];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={
          active
            ? "block lg:hidden  w-2 mx-2 h-2 bg-gradient-to-r from-[#54E0ED] via-[#5B2DED] to-[#DB1E71]  rounded-full"
            : "block lg:hidden w-2 mx-2 h-2  bg-gray rounded-full"
        }
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 350 },
      items: 1,
    },
    iphone: {
      breakpoint: { max: 350, min: 0 }
    }
  };

  let dateToEndCountdownAt = "December 5, 2022 23:47:00";
  const { days, hours, minutes, seconds, hidePresaleSection } =
    useReactCountdown(dateToEndCountdownAt);
  console.log(hidePresaleSection);
  return (
    <div className="max-w-[1500px] w-[95%] md:w-[90%] mx-auto my-12">
      <div className="flex flex-col justify-center items-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="w-[688.61px] mx-auto pt-8 lg:pt-36"
            src="/assets/images/superpass.png"
            alt="superpass"
          />
        </div>
        {!hidePresaleSection ? (
          <>
            {" "}
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="font-black leading-[56.32px] text-[32px] lg:text-[64px] text-center text-white pt-24">
                PHASE 1 MINT COUNTDOWN
              </p>
            </div>
            {/* sdsadad */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full lg:w-[80%] flex justify-around items-center"
            >
              <Counter counter={days} label="Days" />
              <Counter counter={hours} label="Hours" />
              <Counter counter={minutes} label="Minutes" />
              <Counter counter={seconds} label="Seconds" />
            </div>
          </>
        ) : (
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="rounded-2xl relative px-1 py-1 md:px-3 md:py-3">
              <img
                className="w-[100%] h-[100%] md:h-[500px] sm:rounded-3xl md:rounded-2xl gif-custom  md:w-[550px] sm:w-[550px] sm:h-[500px]lg:max-w-[585px] lg:max-h-[508px] "
                src="/assets/images/supassgif.gif"
                alt="gif"
              />
              <div className="absolute w-[100%] h-[100%]  md:h-[100%] right-0 -left-0  top-0">
              <img
                className="w-full  h-full sm:h-[100%] sm:w-[130%]  "
                width={"100%"}
                height="100%"
                alt="neon"
                src="/assets/images/neonbanner.png"
              />
            </div>
            </div>
            <a href="https://super-pass-season-1-j2vd4v4tvshcc1ffkimn.onrender.com/" target="_blank" rel="noreferrer" alt="mint">
              <div className="pt-10 w-56 mx-auto cursor-pointer">
                <Button text="Mint Now" />
              </div>
            </a>
            
          </div>
        )}
        <div data-aos="fade-up" data-aos-duration="1000" className="pt-20">
          <img
            src="/assets/images/supperwallnftseries.png"
            alt="supperwallnftseries"
            className="md:block hidden"
          />
          <img
          src="/assets/images/super-wall-neon.png"
          alt="supperwallnftseries"
          className="md:hidden block"
          />
        </div>
        <p className="text-2xl font-bold  text-center  text-white  hidden md:block pt-10">
          The Gateway to your full Web3 Entertainment Experience
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full grid grid-cols-2  md:w-[80%] md:flex md:justify-around md:items-center pt-8"
        >
          <NftSeries
            imgsrc="/assets/images/superpasslogo.png"
            text="Supply 1111"
            width="w-[180px]"
          />
          <NftSeries
            imgsrc="/assets/images/geb.png"
            text="Supply 5,550"
            width="w-[180px]"
          />
          <NftSeries
            imgsrc="/assets/images/world.png"
            text="Supply 24,000"
            width="w-[126px]"
          />
          <NftSeries
            imgsrc="/assets/images/music.png"
            text="Supply 2,000"
            width="w-[126px]"
          />
        </div>
        <div id='utility' data-aos="fade-up" data-aos-duration="1000" className="pt-20">
          <GradientBorder text="Utility and Perks" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[90%] mx-auto md:w-[90%] md:mx-auto flex md:grid   md:grid-cols-1  lg:grid-cols-3  pt-20 "
        >
          <div className="hidden ml-5  bg-[#202633] z-10 rounded-[40px] border-2 border-white red-box-shadow shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] ">
            <div className="w-[374px]  h-[280px] px-4 py-5  md:h-full md:w-full md:py-10 md:px-8">
              <p className="font-semibold text-2xl leading-9  text-white pt-8">
                GEB & SOW Free Mint
              </p>
              <p className="font-normal text-base leading-9 text-white pt-8">
                Only Available to Super Pass Holders!{" "}
              </p>
              <p className="font-normal text-base leading-9 text-white pt-8">
                Super Pass Holder -{">"} GEB Free Mint -{">"} SOW Free Mint
              </p>
              <p className="font-normal text-base leading-9 text-white text-center pt-2">
                *Terms & Conditions Apply*
              </p>
            </div>
          </div>

          {UtilityPerkData.map((items, index) => (
            <div className="hidden px-4 py-4  lg:block" key={index}>
              <UtilityPerk
                imgsrc={items.imgsrc}
                heading={items.heading}
                text={items.text}
              />
            </div>
          ))}
          <Carousel
            responsive={responsive}
            showDots
            customDot={<CustomDot />}
            arrows={false}
          >
            {UtilityPerkData.map((items, index) => (
              <div className="block lg:hidden mb-8" key={index}>
                <UtilityPerk
                  imgsrc={items.imgsrc}
                  heading={items.heading}
                  text={items.text}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pt-[100px] "
          id="superdeal"
        >
          <GradientBorder text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Super Deal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="pt-20">
          <SuperSpaceHolder />
          <Collapseble
          
            firstitems={true}
            firstimage={true}
            className="bg-[#202633]"
            heading="Genesis Elemental Bricks" 
            imgsrc="/assets/images/geb.png"
            imgWidth="w-[50px] h-[50px]  sm:ml-1 sm:w-[80px]   md:h-[60px] object-cover  lg:w-[100px] lg:h-[100px]"
          />
          <Collapseble

            heading="Some Other World"
            imgsrc="/assets/images/world.png"
            imgWidth="w-[50px] h-[50px] md:w-[80px] md:pl-0.5 sm:pl-8 sm:w-[80px] object-cover  md:h-[80px] lg:w-[100px] lg:h-[100px]"
          />
          {/* <SuperDeal />
          <SuperDeal
            bgColor="bg-[rgba(220, 220, 220, 0.06)]"
            styles="shadow-6xl backdrop-blur-[52.7999px]"
          />
          <SuperDeal bgColor="bg-[#1F2634]" styles="bg-opacity-[50%]" />
          <SuperDeal bgColor="bg-gradient-gray" /> */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pt-[100px] pb-[80px] "
          id="team"
        >
          <GradientBorder text="Team Members" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full  md:w-[90%] sm:w-[70%] text-center   mx-auto grid grid-cols-2 lg:grid-cols-4 gap-20 pt-20"
        >
          <TeamMembers />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[90%] md:w-[80%] mx-auto  pt-20"
        >
          <div>
            <p id="faq" className="text-[30px] md:text-[48px] leading-10 font-bold text-center text-[#DFDFDF] mb-10">
              Frequently Asked Questions
            </p>
          </div>
          <div className="h-[500px] overflow-y-auto">
            {FaqData.map((items, index) => (
              <Faq question={items.question} answer={items.answer}/>
              
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}
