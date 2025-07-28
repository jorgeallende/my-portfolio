import React, { useState } from "react";
import { projectCategories } from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const handleCategoryChange = (categoryIndex: number) => {
    setSelectedCategory(categoryIndex);
    setSelectedProject(0); // Reset to first project when changing category
  };

  const getColorClasses = (color: string, isSelected: boolean) => {
    if (isSelected) {
      switch (color) {
        case "orange":
          return "border-t-orange-500 text-orange-500";
        case "red":
          return "border-t-red-500 text-red-500";
        case "blue":
          return "border-t-blue-500 text-blue-500";
        case "green":
          return "border-t-green-500 text-green-500";
        default:
          return "border-t-blue-500 text-blue-500";
      }
    } else {
      switch (color) {
        case "orange":
          return "border-t-orange-500 text-orange-500 hover:text-orange-600";
        case "red":
          return "border-t-red-500 text-red-500 hover:text-red-600";
        case "blue":
          return "border-t-blue-500 text-blue-500 hover:text-blue-600";
        case "green":
          return "border-t-green-500 text-green-500 hover:text-green-600";
        default:
          return "border-t-blue-500 text-blue-500 hover:text-blue-600";
      }
    }
  };

  const getButtonClasses = (color: string, isSelected: boolean) => {
    if (isSelected) {
      switch (color) {
        case "orange":
          return "bg-orange-500 text-white";
        case "red":
          return "bg-red-500 text-white";
        case "blue":
          return "bg-blue-500 text-white";
        case "green":
          return "bg-green-500 text-white";
        default:
          return "bg-blue-500 text-white";
      }
    } else {
      switch (color) {
        case "orange":
          return "text-orange-600 hover:text-orange-700 hover:bg-orange-50";
        case "red":
          return "text-red-600 hover:text-red-700 hover:bg-red-50";
        case "blue":
          return "text-blue-600 hover:text-blue-700 hover:bg-blue-50";
        case "green":
          return "text-green-600 hover:text-green-700 hover:bg-green-50";
        default:
          return "text-blue-600 hover:text-blue-700 hover:bg-blue-50";
      }
    }
  };

  const currentCategory = projectCategories[selectedCategory];
  const currentProject = currentCategory?.projects[selectedProject];

  return (
    <div className="h-screen my-16">
      <h1 className="text-6xl lg:text-8xl font-black text-base-cream-300 my-6">
        Projetos
      </h1>

      {/* Category Tabs - Desktop */}
      <div className="hidden sm:flex w-full h-12 justify-around text-lg font-bold mb-6">
        {projectCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(index)}
            className={`cursor-pointer h-min ease-in-out ${
              selectedCategory === index ? "border-t-[40px]" : "border-t-[16px]"
            } hover:border-t-[40px] ${getColorClasses(
              category.color,
              selectedCategory === index
            )} flex-1 text-center px-1`}
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      {/* Category Tabs - Mobile (Vertical) */}
      <div className="sm:hidden flex flex-col gap-3 mb-8">
        {projectCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(index)}
            className={`cursor-pointer p-3 rounded-lg transition-all ${
              selectedCategory === index
                ? category.color === "orange"
                  ? "bg-orange-500 text-white"
                  : category.color === "red"
                  ? "bg-red-500 text-white"
                  : category.color === "blue"
                  ? "bg-blue-500 text-white"
                  : category.color === "green"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : category.color === "orange"
                ? "bg-orange-200 border-2 border-orange-600 text-orange-800"
                : category.color === "red"
                ? "bg-red-200 border-2 border-red-600 text-red-800"
                : category.color === "blue"
                ? "bg-blue-200 border-2 border-blue-600 text-blue-800"
                : category.color === "green"
                ? "bg-green-200 border-2 border-green-600 text-green-800"
                : "bg-blue-200 border-2 border-blue-600 text-blue-800"
            } text-center font-bold`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">
                {category.name === "Faculdade"
                  ? "🎓"
                  : category.name === "Crevettic"
                  ? "🦐"
                  : category.name === "Prefeitura de Mossoró"
                  ? "🏛️"
                  : category.name === "Freela"
                  ? "💼"
                  : "📁"}
              </span>
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Category name for mobile - Now shows ABOVE project navigation */}
      <h2
        className={`font-bold text-xl sm:hidden text-center mb-6 ${
          currentCategory?.color === "orange"
            ? "text-orange-500"
            : currentCategory?.color === "red"
            ? "text-red-500"
            : currentCategory?.color === "blue"
            ? "text-blue-500"
            : currentCategory?.color === "green"
            ? "text-green-500"
            : "text-blue-500"
        }`}
      >
        {currentCategory?.name}
      </h2>

      {/* Project Navigation within Category */}
      {currentCategory && currentCategory.projects.length > 1 && (
        <>
          {/* Mobile - Vertical sub-tabs */}
          <div className="sm:hidden flex flex-col gap-3 mb-6 px-4">
            {currentCategory.projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`px-4 py-3 text-sm rounded-lg transition-colors font-medium ${getButtonClasses(
                  currentCategory.color,
                  selectedProject === index
                )} w-full text-left`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Desktop - Horizontal sub-tabs */}
          <div className="hidden sm:flex w-full h-auto mt-14 justify-center gap-3 mb-6 flex-wrap px-2">
            {currentCategory.projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`px-3 py-1 text-sm rounded transition-colors ${getButtonClasses(
                  currentCategory.color,
                  selectedProject === index
                )} min-w-0 flex-shrink-0`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Current Project Display */}
      {currentProject && (
        <Project
          description={currentProject.description}
          imgSrc={currentProject.imgSrc}
          name={currentProject.name}
          link={currentProject.link}
          linkTitle={currentProject.linkTitle}
          technologies={currentProject.technologies}
        />
      )}
    </div>
  );
};

export default Projects;
