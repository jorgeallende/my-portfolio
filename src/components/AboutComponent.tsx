import IdentificationCard from "../assets/IdentificationCard.svg";
import Student from "../assets/Student.svg";
import CircleWavyCheck from "../assets/CircleWavyCheck.svg";
import Wrench from "../assets/Wrench.svg";
import IdentificationCardAlt from "../assets/IdentificationCardAlt.svg";
import StudentAlt from "../assets/StudentAlt.svg";
import CircleWavyCheckAlt from "../assets/CircleWavyCheckAlt.svg";
import WrenchAlt from "../assets/WrenchAlt.svg";
import { useState } from "react";
import { sobre, educacao, experiencia, habilidades } from "../utils/info";

type Props = {
  src?: string | undefined;
};

const AboutComponent = () => {
  const [info, setInfo] = useState("sobre");

  function InfoSwap(newInfo: string) {
    console.log(newInfo);
    setInfo(newInfo);
  }

  return (
    <div className="h-screen flex items-center justify-around">
      <div className="bg-base-cream-300 w-[540px] flex px-2 shadow-xl">
        <div className="w-14 flex flex-col items-center h-full gap-8 justify-around py-6 h-auto">
          <div
            className="cursor-pointer"
            onClick={() => {
              InfoSwap("sobre");
            }}
          >
            <img
              src={info == "sobre" ? IdentificationCardAlt : IdentificationCard}
              className="fill-red-500 fill-white"
              alt=""
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              InfoSwap("educacao");
            }}
          >
            <img src={info == "educacao" ? StudentAlt : Student} alt="" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              InfoSwap("experiencia");
            }}
          >
            <img src={info == "experiencia" ? CircleWavyCheckAlt : CircleWavyCheck} alt="" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              InfoSwap("habilidades");
            }}
          >
            <img src={info == "habilidades" ? WrenchAlt : Wrench} alt="" />
          </div>
        </div>
        <div className="w-1 bg-base-cream-600 flex flex-col">
          <div
            className={` w-full flex-1 ${info == "sobre" ? "bg-blue-600" : ""}`}
          ></div>
          <div
            className={` w-full flex-1 ${
              info == "educacao" ? "bg-orange-500" : ""
            }`}
          ></div>
          <div
            className={` w-full flex-1 ${
              info == "experiencia" ? "bg-red-600" : ""
            }`}
          ></div>
          <div
            className={` w-full flex-1 ${
              info == "habilidades" ? "bg-mint-500" : ""
            }`}
          ></div>
        </div>
        <div className="px-6 py-6 flex flex-col gap-4 flex-1">
          <h1
            className={`font-bold text-2xl ${
              info == "sobre"
                ? "text-blue-600"
                : info == "educacao"
                ? "text-orange-500"
                : info == "experiencia"
                ? "text-red-600"
                : info == "habilidades"
                ? "text-mint-500"
                : ""
            }`}
          >
          </h1>
          <span className="text-justify">
            {info == "sobre" ? (
              <div>
                Me chamo Jorge Allende. Tenho 22 anos. Sou de Mossoró-RN e
                atualmente estou cursando Ciência da Computação na Universidade
                Federal do Rio Grande do Norte. Sou apaixonado por tecnologia,
                programação e por artes visuais.
              </div>
            ) : info == "educacao" ? (
              <div>
                <strong>Ensino médio completo (2014 - 2017)</strong>
                <br />
                <span>
                  Completei o ensino médio no IFRN - Campus Mossoró, onde fiz
                  técnico-integrado em informática.
                </span>
                <br />
                <br />
                <strong>
                  Ensino superior em andamento (2018 - Atualmente)
                </strong>
                <br />
                <span>
                  Atualmente faço Ciência da Computação na UFERSA - Campus
                  Mossoró.
                </span>
              </div>
            ) : info == "experiencia" ? (
              <div>
                Me chamo Jorge Allende. Tenho 22 anos. Sou de Mossoró-RN e
                atualmente estou cursando Ciência da Computação na Universidade
                Federal do Rio Grande do Norte. Sou apaixonado por tecnologia,
                programação e por artes visuais.
              </div>
            ) : info == "habilidades" ? (
              <div>
                Me chamo Jorge Allende. Tenho 22 anos. Sou de Mossoró-RN e
                atualmente estou cursando Ciência da Computação na Universidade
                Federal do Rio Grande do Norte. Sou apaixonado por tecnologia,
                programação e por artes visuais.
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      <div className="text-end text-8xl font-black text-base-cream-300  flex-1">
        <h1>
          {info == "sobre"
            ? sobre.title
            : info == "educacao"
            ? educacao.title
            : info == "experiencia"
            ? experiencia.title
            : info == "habilidades"
            ? habilidades.title
            : ""}
        </h1>
      </div>
    </div>
  );
};

export default AboutComponent;
