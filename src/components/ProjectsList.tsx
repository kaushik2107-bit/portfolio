import React, { useState } from "react";
import { FaArrowRight, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiVite,
} from "react-icons/si";
import { Link } from "react-router-dom";

const projectList_data = [
  {
    name: "Fat to Slim - HTT",
    image: "htt-dashboard.png",
    logos: [1, 2, 3, 4],
    content: `Our team, Black Mackerel, participated in the Hack the Tank hackathon, where we built an innovative project using Next.js, Vite, and Firebase. The objective of our project was to enhance transparency and communication between franchise owners and their franchisor. We developed a web platform where franchise owners could log in and access real-time sales data, financial reports, and marketing materials provided by their franchisor. Using Next.js and Vite, we created a user-friendly interface that allowed franchise owners to easily navigate and interact with the platform. Firebase was used to handle user authentication and database management. Our hard work and dedication paid off as our project was selected among the top 3 at the hackathon.`,
    live_link: "https://htt-sas.vercel.app",
    code_link: "https://github.com/kaushik2107-bit/HTT",
  },
  {
    name: "Booksearch",
    image: "booksearch.png",
    logos: [1, 4, 5],
    content: `BookSearch is an innovative application built on Firebase, Next.js, and web scraping technology. This application enables users to find downloadable PDF links by scraping search engine results. The user simply inputs the keywords for the PDF they are searching for, and BookSearch uses web scraping technology to crawl through search engine results pages and extract any PDF links that it finds. The application then returns the links to the user, making it easy to download the desired PDF file. Next.js was used to build the user interface, creating a fast and responsive design that allows for easy navigation. Firebase was implemented to handle user authentication and database management, ensuring that user data is secure and readily accessible. BookSearch provides a convenient solution for users who need to quickly find and download PDF files, and its advanced technology makes it an essential tool for anyone who frequently works with PDF documents.`,
    live_link: "https://searchbookpdf.vercel.app",
    code_link: "https://github.com/kaushik2107-bit/booksearch",
  },
  {
    name: "Musicify",
    image: "musicify.png",
    logos: [1, 4, 5],
    content:
      "Musicify is a music streaming app built with Next.js and Firebase. It allows users to create playlists and add their favorite songs to them. With a wide selection of songs from various genres and artists, Musicify provides a comprehensive music streaming experience. The app's fast and reliable performance, enabled by Next.js and Firebase, makes it an excellent choice for music lovers.",
    live_link: "https://musicify-kaushik.vercel.app",
    code_link: "https://github.com/kaushik2107-bit/musicify",
  },
  {
    name: "Database using C",
    image: "database.png",
    logos: [6],
    content:
      "A database management system built using C programming language can allow users to create databases and tables, as well as select and insert data with ease. By specifying the name for the columns in each table, users can create and manage databases efficiently. Once tables are added, users can insert data into them using menu driven application which is written in C code. This database system does not provide any sorting or filtering features yet.",
    live_link: "https://github.com/kaushik2107-bit/C-Database",
    code_link: "https://github.com/kaushik2107-bit/C-Database",
  },
  {
    name: "URL Shortener",
    image: "urlshort.png",
    logos: [1, 7],
    content:
      "A URL shortener application built on Next.js and Supabase is a powerful tool that can help you reduce the length of your URLs and make them more manageable. This type of application can be incredibly useful for marketing campaigns, social media posts, or any situation where you need to share a long URL with others.",
    live_link: "https://urltiny.vercel.app",
    code_link: "https://github.com/kaushik2107-bit/url-shortener",
  },
];

const logos = {
  1: <SiNextdotjs className="w-8 h-8 text-black" />,
  2: <SiVite className="w-8 h-8 text-yellow-500" />,
  3: <FaReact className="w-8 h-8 text-blue-500" />,
  4: <SiFirebase className="w-8 h-8 text-yellow-500" />,
  5: <SiJavascript className="w-8 h-8 text-yellow-500" />,
  6: <SiCplusplus className="w-8 h-8 text-blue-700" />,
  7: <SiSupabase className="w-8 h-8 text-green-500" />,
};

export default function ProjectsList() {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const togglePost = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (expandedPosts.includes(index)) {
      setExpandedPosts(expandedPosts.filter((i) => i !== index));
    } else {
      setExpandedPosts([...expandedPosts, index]);
    }
  };
  return (
    <div className="relative theme-font mb-16">
      <h1 className="text-center text-6xl max-md:text-4xl font-black mt-6">
        Projects
      </h1>
      <div className="w-[60%] border border-black m-auto my-10" />
      <div className="flex flex-col gap-16">
        {projectList_data.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 ? "flex-row-reverse" : ""
            } md:gap-16 gap-8 max-md:flex-col px-8 md:px-12`}
          >
            <div
              className={`rounded-md md:w-1/2 ${
                index % 2 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              <img
                src={item.image}
                className={`rounded-md object-contain z-10 hover:back-shadow`}
              />
            </div>
            <div className="flex flex-col gap-4 z-10 md:w-1/2">
              <h2 className="text-4xl font-bold">{item.name}</h2>
              <div className="flex flex-wrap gap-2">
                {item.logos.map((num) => logos[num as keyof typeof logos])}
              </div>
              <p>
                <span
                  className={`${
                    expandedPosts.includes(index)
                      ? "transition-all duration-500 ease-in-out"
                      : "line-clamp-6"
                  } transition-all duration-500 ease-in-out`}
                >
                  {item.content}
                </span>
                {expandedPosts.includes(index) ? (
                  <a
                    href="#"
                    className="text-blue-500 font-bold"
                    onClick={(e) => togglePost(index, e)}
                  >
                    Read less
                  </a>
                ) : (
                  <a
                    href="#"
                    className="text-blue-500 font-bold"
                    onClick={(e) => togglePost(index, e)}
                  >
                    Read more
                  </a>
                )}
              </p>
              <div className="">
                <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-2 gap-4">
                  <Link to={item.live_link}>
                    <button className="max-md:w-60 w-full border p-2 px-8 rounded-md bg-orange-500/80 text-white flex items-center gap-2 justify-center">
                      Live <FaArrowRight />
                    </button>
                  </Link>
                  <Link to={item.code_link}>
                    <button className="max-md:w-60 w-full border p-2 px-8 rounded-md bg-black text-white flex items-center gap-2 justify-center">
                      Code <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
