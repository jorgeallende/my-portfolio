import React, { useState } from "react";
import { projects } from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <div className="h-screen mt-16">
      <h1 className="text-8xl font-black text-base-cream-300 my-6">Projetos</h1>
      <div className="flex min-h-max h-14 justify-around text-lg font-bold">
        <div
          onClick={() =>
            selectedProject == 0
              ? setSelectedProject(10)
              : setSelectedProject(0)
          }
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 0 ? "border-t-[40px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-red-500 text-red-500 w-full flex-1 text-center`}
        >
          Crevettic
        </div>
        <div
          onClick={() =>
            selectedProject == 1
              ? setSelectedProject(10)
              : setSelectedProject(1)
          }
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 1 ? "border-t-[40px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-orange-500 text-orange-500 w-full flex-1 text-center`}
        >
          e-Sports Duo Finder
        </div>
        <div
          onClick={() =>
            selectedProject == 2
              ? setSelectedProject(10)
              : setSelectedProject(2)
          }
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 2 ? "border-t-[40px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-orange-400 text-orange-400 w-full flex-1 text-center`}
        >
          Seeds
        </div>
        <div
          onClick={() =>
            selectedProject == 3
              ? setSelectedProject(10)
              : setSelectedProject(3)
          }
          className={`cursor-pointer h-min ease-in-out ${
            selectedProject == 3 ? "border-t-[40px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-blue-500 text-blue-500 w-full flex-1 text-center`}
        >
          Stairs
        </div>
        <div
          onClick={() =>
            selectedProject == 4
              ? setSelectedProject(10)
              : setSelectedProject(4)
          }
          className={`${
            selectedProject == 4 ? "border-t-[40px]" : "border-t-[16px]"
          } border-t-[16px] hover:border-t-[40px] border-t-blue-600 text-blue-600  w-full flex-1 text-center cursor-pointer h-min ease-in-out `}
        >
          Leon
        </div>
      </div>
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
