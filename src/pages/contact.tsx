import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTwitter, IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="w-full md:h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="relative flex-1 md:px-8 theme-font">
          <h1 className="text-center text-6xl max-md:text-4xl font-black mt-6">
            Let's Connect
          </h1>
          <div className="w-[60%] border border-black m-auto my-10" />
          <p className="md:px-20 px-10 md:text-center md:text-lg text-justify">
            Thank you for taking the time to visit my portfolio website. I am
            passionate about my work and always looking for opportunities to
            connect with others who share similar interests. If you have any
            questions about my portfolio or would like to discuss a potential
            project, please don't hesitate to get in touch with me. You can
            easily by reaching out to me on social media. I am always open to
            hearing new ideas and collaborating with others to create something
            great. So don't be shy, let's connect and see what we can create
            together!
          </p>
          <div className="flex gap-4 justify-center p-8 px-10 max-md:flex-col">
            <Link to="mailto:kaushiksbhowmick@gmail.com">
              <button className="hover:bg-orange-500 hover:text-black justify-center font-medium transition-all delay-75 flex items-center gap-2 bg-black text-white px-10 py-3 rounded-md max-md:w-full">
                <IoMailOpenOutline className="w-6 h-6" /> Email
              </button>
            </Link>
            <Link to="https://twitter.com/Kaushik21072002">
              <button className="hover:bg-blue-500 hover:text-black flex justify-center transition-all delay-75 items-center font-medium gap-2 bg-black text-white px-10 py-3 rounded-md max-md:w-full">
                <IoLogoTwitter className="w-6 h-6" /> Twitter
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
