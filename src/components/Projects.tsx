import React, { useState } from "react";
import { projects } from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <div className="h-screen mt-16">
      <h1 className="text-6xl lg:text-8xl font-black text-base-cream-300 my-6">
        Projetos
      </h1>
      <div className="flex h-12 sm:h-12 justify-around text-lg font-bold">
        <div
          onClick={() => setSelectedProject(0)}
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 0 ? "border-t-[41px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-red-500 text-red-500 w-full flex-1 text-center`}
        >
          <span className="hidden sm:block">Crevettic</span>
        </div>
        <div
          onClick={() => setSelectedProject(1)}
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 1 ? "border-t-[41px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-orange-500 text-orange-500 w-full flex-1 text-center`}
        >
          <span className="hidden sm:block">e-Sports Duo Finder</span>
        </div>
        <div
          onClick={() => setSelectedProject(2)}
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 2 ? "border-t-[41px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-orange-400 text-orange-400 w-full flex-1 text-center`}
        >
          <span className="hidden sm:block">Stairs</span>
        </div>
        <div
          onClick={() => setSelectedProject(3)}
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 3 ? "border-t-[41px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-blue-500 text-blue-500 w-full flex-1 text-center`}
        >
          <span className="hidden sm:block">Prefeitura de Mossoró</span>
        </div>
        <div
          onClick={() => setSelectedProject(4)}
          className={`${
            selectedProject == 4 ? "border-t-[41px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-blue-600 text-blue-600  w-full flex-1 text-center cursor-pointer h-min ease-in-out `}
        >
          <span className="hidden sm:block">Leon</span>
        </div>
      </div>
      <h1
        className={`font-bold text-xl block sm:hidden ${
          selectedProject == 0
            ? "text-red-500"
            : selectedProject == 1
            ? "text-orange-500"
            : selectedProject == 2
            ? "text-orange-400"
            : selectedProject == 3
            ? "text-blue-500"
            : "text-blue-600"
        } 
      `}
      >
        {projects[selectedProject]?.name}
      </h1>
      <Project
        description={projects[selectedProject]?.description}
        imgSrc={projects[selectedProject]?.imgSrc}
        name={projects[selectedProject]?.name}
        link={projects[selectedProject]?.link}
        linkTitle={projects[selectedProject]?.linkTitle}
      />
    </div>
  );
};

export default Projects;
