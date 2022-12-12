import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "superwall_321",
        "Home_template_du53atu",
        form.current,
        "8TBp7G5GfyBEqa-Wg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-[#12002D] pt-16">
      <div className="max-w-[1500px] mx-auto grid justify-center lg:grid-cols-5 bg-[#12002D]">
        <div className=" col-span-2 lg:col-span-1 pb-8  lg:pl-10 lg:pb-10">
          <div className="flex justify-center items-center lg:justify-start ">
            <img
              className="w-[157px] "
              src="/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <p className="text-center lg:text-start text-[17px] whitespace-nowrap font-bold leading-[21.62px] text-white py-6">
            Join Superwall Community
          </p>
          <div className="flex justify-center lg:justify-start items-center  pl-0 cursor-pointer">
            <a href="https://twitter.com/superwallglobal">
              <img
                className="max-w-none mr-2"
                src="/assets/images/neon_twitter.png"
                alt="twit"
              />
            </a>
            <a href="https://discord.gg/cRbAWmADjv">
              <img
                className="max-w-none mr-2"
                src="/assets/images/neon_discord.png"
                alt="discord"
              />
            </a>
            <a href="https://www.instagram.com/superwall_official/">
              <img
                className="max-w-none mr-2"
                src="/assets/images/neon_insta.png"
                alt="insta"
              />
            </a>
            <a href="https://www.superwall.io/">
              <img
                className="max-w-none mr-2"
                src="/assets/images/neon_website.png"
                alt="website"
              />
            </a>
          </div>
        </div>
        <div className="pt-0  mt-4 lg:pl-20 lg:pb-10">
        <a target='blank' href="https://www.superwall.io/"><p className="text-[17px] font-bold leading-5 text-white text-center lg:text-left">
            Superwall.co
          </p></a>
         <a href="/#utility"><p className="text-sm font-normal leading-5 text-white py-4 text-center lg:text-left">
            Utilities & Perks
          </p></a> 
          <a href="/#superdeal"> <p className="text-sm font-normal leading-5 text-white text-center lg:text-left">
            Super Deal
          </p></a>
          <a href="/#team"><p className="text-sm font-normal leading-5 text-white py-4 text-center lg:text-left">
            Super Team
          </p></a>
          <a href="/#faq"><p className="text-sm font-normal leading-5 text-white text-center lg:text-left">
            Frequently Asked <br/> Questions
          </p></a>
        </div>
        <div className="  lg:pl-16 lg:pb-10 mt-4">
        <a target='blank' href="https://www.superwall.io/"><p className="text-[17px] font-bold leading-5 text-white text-center lg:text-left">
            Superwall.io
          </p></a>
          <a target='blank' href="https://www.superwall.io/">
            <p className="cursor-pointer text-sm font-normal leading-5 text-white py-4 text-center lg:text-left">
              Home
            </p>
          </a>
          <a target='blank' href="https://www.superwall.io/#brck-token">
            <p className="cursor-pointer text-sm font-normal leading-5 text-white text-center lg:text-left">
              $BRCK Token
            </p>
          </a>
          <a href="https://www.superwall.io/#road-map">
            <p className="cursor-pointer text-sm font-normal leading-5 text-white py-4 text-center lg:text-left">
              Superwall Roadmap
            </p>
          </a>
          <a href="https://www.superwall.io/#super-team">
            <p className="cursor-pointer text-sm font-normal leading-5 text-white text-center lg:text-left">
              Super Team
            </p>
          </a>
          <a href="https://www.superwall.io/#ambassadors">
            <p className="cursor-pointer text-sm font-normal leading-5 text-white py-4 text-center lg:text-left">
              Ambassadors
            </p>
          </a>
        </div>
        <div className="col-span-2 pt-8 lg:pt-0 lg:pr-20 pb-8 lg:pb-10">
          <p className="text-[30px] font-bold leading-10 text-white text-center px-2 lg:text-left">
            Sign-up for Whitelist & OG
          </p>
          <p className="text-lg font-normal leading-5 text-white pt-4 pb-5 text-center px-2 lg:text-left">
            Be the first to know about discounts, offers, events, alphas, beta
            testing and more!{" "}
          </p>
          <div className="w-[95%] md:w-[70%] sm:w-[70%] sm:h-[70%] mx-auto lg:w-[90%] lg:ml-0 lg:mr-0  relative  rounded-full">
            <form
              className=" flex justify-evenly px-7 items-center rounded-full z-10"
              ref={form}
              onSubmit={sendEmail}
            >
              
              <div>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="user_email"
                  className="bg-[#12002D] outline-none block w-full md:pt-[7%] custom-media sm:pt-[23%]  z-10"
                />
              </div>
              <div className="cursor-pointer  ">
                <input
                  type="submit"
                  value="Subscribe"
                  className="font-bold cursor-pointer md:pt-[19%] custom-media-sus sm:pt-[55%] "
                />
              </div>
            </form>
            <div className="absolute w-full h-full top-0  ">
              <a href="mailto:@contactus@superwall.co"><img
                className="object-cover sm:pt-1  "
                width={"100%"}
                height="100%"
                alt="neon"
                src="/assets/images/Susbox.png"
              /> </a>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-[#12002D] text-center sm:pt-8 sm:pb-8 text-[15px] font-normal">
        Copyright © SUPERWALLGLOBAL 2022. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
