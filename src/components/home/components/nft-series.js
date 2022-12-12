import React from "react";

const NftSeries = ({imgsrc,text,styles,width}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img className={` ${width}`} src={imgsrc} alt="passlogo" />
      </div>
      <div>
        <p className={`text-[18px] md:text-[22px] font-medium leading-6 text-white text-center ${styles}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default NftSeries;
