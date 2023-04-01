import React from "react";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="md:h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <div id="projects" className="w-full flex flex-col overflow-hidden">
        <Projects />
      </div>
      <div id="skills" className="w-full flex flex-col overflow-hidden">
        <Skills />
      </div>
      {/* <div id="skills" className="w-full flex flex-col overflow-hidden">
        <Education />
      </div> */}
      <div id="contact" className="w-full flex flex-col overflow-hidden">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
