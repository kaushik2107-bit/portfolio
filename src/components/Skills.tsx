import React from "react";
import { FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

export default function Skills() {
  return (
    <>
      <div className="md:w-80 w-40 overflow-hidden h-40 header-gradient-color absolute ml-[50%]" />
      <div className="theme-font flex flex-col justify-start relative py-8 max-md:items-start px-8">
        <h1 className="text-[70px] max-md:text-left text-center max-md:text-5xl leading-[84px] font-black">
          Skills
        </h1>
        <div className="flex flex-wrap max-md:px-0 px-16 pt-8 gap-20 justify-center max-md:justify-around mt-8">
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <FaReact className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-400 hover:text-black transition-all" />
            <p className="">ReactJS</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <FaNodeJs className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600 hover:text-black transition-all" />
            <p className="">NodeJS</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <SiNextdotjs className="max-md:w-12 max-md:h-12 w-20 h-20 text-black hover:text-black transition-all" />
            <p className="">NextJS</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <SiTypescript className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600 hover:text-black transition-all" />
            <p className="">Typescript</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <FaHtml5 className="max-md:w-12 max-md:h-12 w-20 h-20 text-orange-600 hover:text-black transition-all" />
            <p className="">HTML</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <FaCss3Alt className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-700 hover:text-black transition-all" />
            <p className="">CSS</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <SiFirebase className="max-md:w-12 max-md:h-12 w-20 h-20 text-yellow-500 hover:text-black transition-all" />
            <p className="">Firebase</p>
          </div>

          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
            <SiMongodb className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-500 hover:text-black transition-all" />
            <p className="">MongoDB</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
            <SiExpress className="max-md:w-12 max-md:h-12 w-20 h-20 text-black hover:text-black transition-all" />
            <p className="">ExpressJS</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
            <SiSupabase className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600 hover:text-black transition-all" />
            <p className="">Supabase</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
            <TbBrandCpp className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600 hover:text-black transition-all" />
            <p className="">C/C++</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
            <FaFigma className="max-md:w-12 max-md:h-12 w-20 h-20 text-black hover:text-black transition-all" />
            <p className="">Figma</p>
          </div>
          <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
            <DiMysql className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600 hover:text-black transition-all" />
            <p className="">MySQL</p>
          </div>
        </div>
        <p className="p-4 text-center pt-20 theme-font font-medium text-lg max-md:text-left max-md:hidden">
          ...And many more skills. To check out more visit my github:{" "}
          <a
            href="https://github.com/kaushik2107-bit/"
            className="text-orange-500"
          >
            https://github.com/kaushik2107-bit/
          </a>
        </p>
      </div>
    </>
  );
}
