import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="md:w-80 w-40 overflow-hidden h-40 header-gradient-color absolute ml-[50%]" />
      <div className="theme-font flex flex-col justify-start relative py-8 max-md:items-start px-8">
        <h1 className="text-[70px] max-md:text-left text-center max-md:text-5xl leading-[84px] font-black max-md:mb-8">
          Let's talk
        </h1>
        <div className="flex items-center max-md:px-0 px-16 gap-20 justify-center max-md:justify-around">
          <div className="md:w-1/2">
            <h1 className="text-5xl my-6 text-left text-black/90 font-black max-md:hidden">
              Let's connect and talk
            </h1>
            <p className="">
              Let's Connect and Collaborate! I am always excited to meet new
              people and explore potential opportunities. If you have a project
              in mind or just want to say hello, feel free to reach out. I'm
              looking forward to hearing from you!
            </p>
            <Link to="/contact">
              <button className="border max-md:mt-8 p-2 w-60 md:mt-8 px-8 rounded-md bg-orange-500/80 text-white flex items-center gap-2 justify-center">
                Connect with me <FaArrowRight />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 max-md:hidden">
            <img
              src="contact.avif"
              className="mix-blend-multiply scale-[1] scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
