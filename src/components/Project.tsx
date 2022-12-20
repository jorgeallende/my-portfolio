import LinkSimple from "../assets/LinkSimple.svg";

interface ProjectProps {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkTitle: string;
}

const Project = (props: ProjectProps) => {
  console.log(props);
  return (
    <div className="mt-9 flex gap-8 flex-col md:flex-row">
      <div className="flex flex-col">
        <span className="text-lg text-justify flex flex-col">
          {props?.description}
        </span>
        <br />
        <a
          className="text-blue-600 flex gap-1 items-center w-min"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{props?.linkTitle}</span>
          {props.link ? (
            <img className={"w-4"} src={LinkSimple} alt="" srcset="" />
          ) : (
            ""
          )}
        </a>
      </div>
      <img src={props?.imgSrc} className="max-w-[210px] self-center" alt="" srcset="" />
    </div>
  );
};

export default Project;
