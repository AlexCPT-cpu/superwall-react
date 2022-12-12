import React, { useState } from "react";
import parse from "html-react-parser";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";

const Faq = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
        <div
          className="w-full py-6 mb-5 p-2 bg-gradient-to-r from-[#301A64] via-[#301A64] to-[#301A64] rounded-lg ">
          <div className="  shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)]  ">
            <div>
              <div className="flex   justify-between items-center   pb-2">
                <div className="">
                  <p className="text-[17px] md:text-[20px] font-light md:font-bold leading-[22px] text-white ml-8 ">
                    {question}
                  </p>
                </div>
                <div className="mr-10">
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
            </div>
            <div>
              <Collapsible open={open}>
                <div>
                  <div className="flex justify-between items-center   ">
                    <div className="mx-8 ">
                      <p className="text-sm font-light md:text-[17px] text-[#969696] md:text-white md:font-normal leading-6">
                        {parse(answer)}</p>
                    </div>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
  );
};

export default Faq;
