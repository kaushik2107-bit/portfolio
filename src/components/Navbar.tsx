import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const base_url = import.meta.env.BASE_URL;
  const toggle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <div className="w-full h-20 header-gradient absolute"></div>
      <div className="w-full h-20 px-8 flex justify-between items-center theme-font relative">
        <Link to="/">
          <p className="text-3xl font-bold">Kaushik.</p>
        </Link>
        <ul className="flex gap-8 text-lg font-semibold max-md:hidden">
          <a href={`${base_url}#projects`}>
            <li>Projects</li>
          </a>
          <a href={`${base_url}#skills`}>
            <li>Skills</li>
          </a>
          <a href={`${base_url}#contact`}>
            <li>Contact</li>
          </a>
        </ul>
        <div className="md:hidden">
          {isVisible ? (
            <RxCross2 className="w-8 h-8 cursor-pointer" onClick={toggle} />
          ) : (
            <IoMenuOutline
              className="w-8 h-8 cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>
      </div>
      {isVisible && (
        <ul className="theme-font flex flex-col w-full px-8 gap-4 md:hidden font-medium delay-75 transition-all">
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      )}
    </>
  );
}
