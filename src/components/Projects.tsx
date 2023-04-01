import { FaArrowRight, FaGithub } from "react-icons/fa";
import { IoGlobe } from "react-icons/io5";
import { Link } from "react-router-dom";

const project_data = [
  {
    name: "Musicify",
    image: "musicify.png",
    website: "https://musicify-kaushik.vercel.app",
    github: "https://github.com/kaushik2107-bit/musicify",
    desc: "A music streaming platform using latest technologies such as NextJS and Firebase",
  },
  {
    name: "Booksearch",
    image: "booksearch.png",
    website: "https://searchbookpdf.vercel.app",
    github: "https://github.com/kaushik2107-bit/booksearch",
    desc: "An application which scraps the web to find downloadable pdf links to book.",
  },
  {
    name: "Fat to Slim - HTT",
    image: "htt-dashboard.png",
    website: "https://htt-sas.vercel.app",
    github: "https://github.com/kaushik2107-bit/HTT",
    desc: "This project was built by our team in a hackathon for a Shark Tank India participant",
  },
];

export default function Projects() {
  return (
    <>
      <div className="md:w-80 w-40 overflow-hidden h-40 header-gradient-color absolute ml-[50%]" />
      <div className="theme-font flex flex-col justify-start relative py-8 max-md:items-start px-8">
        <h1 className="text-[70px] max-md:text-left text-center max-md:text-5xl leading-[84px] font-black">
          Projects
        </h1>
        <div className="flex flex-wrap max-md:px-0 px-16 pt-8 gap-4 justify-center max-md:justify-start">
          {project_data.map((item, index) => (
            <div key={index} className="lg:w-80 md:w-96 w-full">
              <div className="w-full h-80 rounded-md relative flex flex-col items-start justify-end shadow-md bg-shadow">
                <img
                  src={item.image}
                  className="object-cover object-left w-full h-full mix-blend-color-burn rounded-md absolute -z-10"
                />
                <div className="w-full h-full -z-10 absolute bg-gradient-to-b from-transparent to-[#111]/60 rounded-md" />
                <h2 className="theme-font font-extrabold text-3xl text-white mx-4">
                  {item.name}
                </h2>
                <div className="mx-4 my-2 flex flex-wrap gap-2">
                  <a
                    href={item.website}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <IoGlobe className="w-8 h-8 text-white" />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <FaGithub className="w-8 h-8 text-white" />
                  </a>
                </div>
              </div>
              <p className="px-3 max-md:px-1 text-lg py-2 text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <button className="border max-md:mt-4 max-md:ml-2 p-2 w-60 md:m-auto md:mt-8 px-8 rounded-md bg-orange-500/80 text-white flex items-center gap-2 justify-center">
            See other projects <FaArrowRight />
          </button>
        </Link>
      </div>
    </>
  );
}
