import HeaderLogo from "../assets/header-logo.svg";
import ThickDivider from "../assets/thick-divider.svg";
import TelegramLogo from "../assets/telegram-logo.svg";

import Polygon9 from "../assets/polygon9.svg";
import Polygon8 from "../assets/polygon8.svg";
import Polygon7 from "../assets/polygon7.svg";
import Polygon6 from "../assets/polygon6.svg";
import Polygon5 from "../assets/polygon5.svg";
import Polygon4 from "../assets/polygon4.svg";
import Polygon3 from "../assets/polygon3.svg";

const Hero = () => {
  return (
    <div className="  text-base-black h-screen">
      {/* header */}
      <div className="flex justify-between items-center">
        <div>
          <img src={HeaderLogo} alt="" />
        </div>
        <div className="cursor-pointer flex gap-2 items-center bg-base-cream-500 px-5 py-1 rounded-full text-base-cream-600 border-2 border-base-cream-600">
          <img src={TelegramLogo} alt="" srcset="" />
          Me contrate
        </div>
      </div>

      {/* hero */}
      <div className="flex justify-between items-center top-1/3 absolute gap-56">
        <div className="flex flex-col gap-4">
          <span className="text-7xl font-light">
            Olá! <br /> Meu nome é <br />{" "}
            <strong className="font-semibold">Jorge Allende</strong>
          </span>
          <div>
            <img src={ThickDivider} alt="" srcset="" />
          </div>
          <span className="font-light text-2xl">
            Designer UI/UX | Web Developer | Fullstack
          </span>
        </div>
        <div className="flex gap-2 -rotate-12 transition-transform">
          <img className="" src={Polygon9} alt="" srcset="" />
          {/* <img className="-ml-32" src={Polygon8} alt="" srcset="" /> */}
          <img
            className="-ml-32 shape1 spinner"
            src={Polygon7}
            alt=""
            srcset=""
          />
          <img className="-ml-32 shape2" src={Polygon4} alt="" srcset="" />
          <img className="-ml-32 shape3" src={Polygon4} alt="" srcset="" />
          <img className="-ml-32 shape4" src={Polygon6} alt="" srcset="" />
          <img className="-ml-32 shape5" src={Polygon5} alt="" srcset="" />
          <img className="-ml-32 shape6" src={Polygon4} alt="" srcset="" />
          <img className="-ml-32 shape7" src={Polygon3} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
