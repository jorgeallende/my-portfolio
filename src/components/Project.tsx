import LinkSimple from "../assets/LinkSimple.svg";

interface ProjectProps {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkTitle: string;
  technologies: string[];
}

const Project = (props: ProjectProps) => {
  console.log(props);

  const getTechColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return "bg-blue-800 text-white";
      case "spring":
        return "bg-green-800 text-white";
      case "nest":
        return "bg-red-800 text-white";
      case "laravel":
        return "bg-orange-800 text-white";
      case "ruby on rails":
        return "bg-purple-800 text-white";
      default:
        return "bg-gray-800 text-white";
    }
  };

  return (
    <div className="mt-16 flex gap-8 flex-col md:flex-row ">
      <div className="flex flex-col">
        <span className="text-lg text-justify flex flex-col">
          {props?.description}
        </span>

        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-5 py-1 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 ${getTechColor(
                tech
              )}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          className="text-blue-600 flex gap-1 items-center w-min"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="min-w-max">{props?.linkTitle}</span>
          {props.link ? <img className={"w-4"} src={LinkSimple} alt="" /> : ""}
        </a>
      </div>
      <img src={props?.imgSrc} className="max-w-[210px] self-center" alt="" />
    </div>
  );
};

export default Project;
