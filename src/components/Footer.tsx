import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex max-md:flex-col max-md:gap-4 justify-between items-center relative theme-font px-8 p-4">
        <div className="w-full h-16 header-gradient absolute bottom-0"></div>
        <p className="text-lg relative">Made by Kaushik</p>
        <ul className="flex items-center gap-3 relative">
          <li>
            <a href="https://github.com/kaushik2107-bit">
              <FaGithub className="w-6 h-6 " />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Kaushik21072002">
              <FaTwitter className="w-6 h-6 " />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kaushik-bhowmick-3064a4155/">
              <FaLinkedin className="w-6 h-6 " />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
