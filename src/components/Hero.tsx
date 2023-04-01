import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="px-12 flex items-center justify-center flex-1 theme-font max-md:px-8 max-md:pt-8">
      <div className="w-1/2 flex flex-col gap-4 max-lg:w-full">
        <h1 className="text-[80px] max-md:text-5xl leading-[84px] font-black">
          Kaushik Bhowmick
        </h1>
        <p className="text-lg px-2 max-md:px-0 max-md:text-base">
          As a{" "}
          <span className="text-orange-500 font-extrabold">
            frontend developer,
          </span>{" "}
          I am skilled at designing and implementing the user interface of
          websites and web applications. I have a deep understanding of HTML,
          CSS, and JavaScript, and I am able to create visually appealing and
          user-friendly interfaces. I am passionate about staying up-to-date
          with the latest web technologies and trends, and I am constantly
          looking for ways to improve my skills and knowledge.
        </p>
        <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-2 gap-4">
          <Link to={"/projects"}>
            <button className="max-md:w-60 border p-2 px-8 rounded-md bg-orange-500/80 text-white flex items-center gap-2 justify-center">
              My Projects <FaArrowRight />
            </button>
          </Link>
          <button className="max-md:w-60 border p-2 px-8 rounded-md bg-black text-white flex items-center gap-2 justify-center">
            My Blogs <FaArrowRight />
          </button>
          <div className="header-gradient w-28 h-16 ml-10 relative"></div>
        </div>
      </div>
      <div className="w-1/2 max-lg:hidden">
        <img src="image.avif" />
      </div>
    </div>
  );
}
