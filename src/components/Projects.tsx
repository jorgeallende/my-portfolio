import React, { useState, useEffect } from "react";
import { projectCategories } from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean;
  }>({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setOpenDropdowns({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (categoryIndex: number) => {
    setSelectedCategory(categoryIndex);
    setSelectedProject(0); // Reset to first project when changing category
    setOpenDropdowns({});
  };

  const toggleDropdown = (categoryIndex: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }));
  };

  const handleProjectSelect = (categoryIndex: number, projectIndex: number) => {
    setSelectedCategory(categoryIndex);
    setSelectedProject(projectIndex);
    setOpenDropdowns({});
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

      {/* Mobile - Category Dropdowns */}
      <div className="sm:hidden space-y-3 mb-8">
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="dropdown-container">
            <button
              onClick={() => toggleDropdown(categoryIndex)}
              className={`w-full p-3 rounded-md border flex items-center justify-between text-left transition-all ${
                selectedCategory === categoryIndex
                  ? category.color === "orange"
                    ? "border-orange-400 bg-white text-orange-600 shadow-sm"
                    : category.color === "red"
                    ? "border-red-400 bg-white text-red-600 shadow-sm"
                    : category.color === "blue"
                    ? "border-blue-400 bg-white text-blue-600 shadow-sm"
                    : category.color === "green"
                    ? "border-green-400 bg-white text-green-600 shadow-sm"
                    : "border-blue-400 bg-white text-blue-600 shadow-sm"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span
                className={`text-xs transition-transform ${
                  openDropdowns[categoryIndex] ? "rotate-180" : ""
                } ${
                  selectedCategory === categoryIndex
                    ? category.color === "orange"
                      ? "text-orange-500"
                      : category.color === "red"
                      ? "text-red-500"
                      : category.color === "blue"
                      ? "text-blue-500"
                      : category.color === "green"
                      ? "text-green-500"
                      : "text-blue-500"
                    : "text-gray-400"
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdowns[categoryIndex] && (
              <div className="mt-1 bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                {category.projects.map((project, projectIndex) => (
                  <button
                    key={projectIndex}
                    onClick={() =>
                      handleProjectSelect(categoryIndex, projectIndex)
                    }
                    className={`w-full p-3 text-left hover:bg-gray-50 border-b last:border-b-0 transition-colors text-sm ${
                      selectedCategory === categoryIndex &&
                      selectedProject === projectIndex
                        ? category.color === "orange"
                          ? "bg-orange-50 text-orange-700 border-l-2 border-l-orange-400"
                          : category.color === "red"
                          ? "bg-red-50 text-red-700 border-l-2 border-l-red-400"
                          : category.color === "blue"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-l-blue-400"
                          : category.color === "green"
                          ? "bg-green-50 text-green-700 border-l-2 border-l-green-400"
                          : "bg-blue-50 text-blue-700 border-l-2 border-l-blue-400"
                        : "text-gray-600"
                    }`}
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop - Horizontal sub-tabs */}
      {currentCategory && (
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
      )}

      <div
        className={`bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg border-2 ${
          currentCategory?.color === "orange"
            ? "border-orange-400"
            : currentCategory?.color === "red"
            ? "border-red-400"
            : currentCategory?.color === "blue"
            ? "border-blue-400"
            : currentCategory?.color === "green"
            ? "border-green-400"
            : "border-blue-400"
        }`}
      >
        {/* Current Project Title */}
        {currentProject && (
          <div className="mb-6 ">
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                currentCategory?.color === "orange"
                  ? "text-orange-600"
                  : currentCategory?.color === "red"
                  ? "text-red-600"
                  : currentCategory?.color === "blue"
                  ? "text-blue-600"
                  : currentCategory?.color === "green"
                  ? "text-green-600"
                  : "text-blue-600"
              }`}
            >
              {currentProject.name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {currentCategory?.name}
            </p>
          </div>
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
    </div>
  );
};

export default Projects;
