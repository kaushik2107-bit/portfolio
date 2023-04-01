import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsList from "../components/ProjectsList";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col overflow-hidden">
        <Navbar />
        <ProjectsList />
        <Footer />
      </div>
    </div>
  );
}
