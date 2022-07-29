import React from "react";
import ProjectItem from "./ProjectItem";
import todoProject from "../public/assets/todoproject.png";

const Projects = () => {
  return (
    <div id="projects" className="flex justify-center w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] max-auto flex flex-col justify-center h-full">
        <p className="font-bold uppercase text-xl tracking-widest text-[#648DE5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="ToDo List App"
            backgroundImg={todoProject}
            projectUrl="https://github.com/chrismcconn2789/nextjstodo"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
