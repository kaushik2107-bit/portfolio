import React from "react";

export default function Education() {
  return (
    <>
      <div className="md:w-80 w-40 overflow-hidden h-40 header-gradient-color absolute ml-[50%]" />
      <div className="theme-font flex flex-col justify-start relative py-8 max-md:items-start px-8">
        <h1 className="text-[70px] max-md:text-left text-center max-md:text-5xl leading-[84px] font-black">
          Education
        </h1>
        <div className="flex items-center max-md:px-0 px-16 gap-20 justify-center max-md:justify-around">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </>
  );
}
