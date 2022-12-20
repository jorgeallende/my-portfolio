
import ThickDivider from "../assets/thick-divider.svg";


import Polygon9 from "../assets/polygon9.svg";
import Polygon8 from "../assets/polygon8.svg";
import Polygon7 from "../assets/polygon7.svg";
import Polygon6 from "../assets/polygon6.svg";
import Polygon5 from "../assets/polygon5.svg";
import Polygon4 from "../assets/polygon4.svg";
import Polygon3 from "../assets/polygon3.svg";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="text-base-black">
      {/* hero */}
      <div className="flex flex-col items-center sm:min-h-[70vh] relative gap-14 mt-20 sm:mt-20 xl:mt-0 xl:gap-56 xl:flex-row h-3/4">
        <div className="flex flex-1 flex-col gap-2 sm:gap-4">
          <span className="text-4xl sm:text-6xl xl:text-7xl font-light">
            Olá! <br /> Meu nome é <br />{" "}
            <strong className="font-semibold">Jorge Allende</strong>
          </span>
          <div>
            <img src={ThickDivider} alt="" srcset="" />
          </div>
          <span className="font-light text-md sm:text-xl xl:text-2xl">
            Designer UI/UX | Web Developer | Fullstack
          </span>
        </div>
        <div className="flex items-center justify-end absolute sm:relative top-0 -right-7 sm:justify-center pr-16 md:pr-0 gap-2 transition-transform xl:pr-28">
          <img
            className="w-[90px] -ml-20 md:w-auto  sm:-ml-32 shape1 spinner"
            src={Polygon7}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape2"
            src={Polygon4}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape3"
            src={Polygon4}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape4"
            src={Polygon6}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape5"
            src={Polygon5}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape6"
            src={Polygon4}
            alt=""
            srcset=""
          />
          <img
            className="w-[90px] -ml-20 md:w-auto sm:-ml-32 shape7"
            src={Polygon3}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
