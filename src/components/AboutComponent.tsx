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
import HeaderLogo from "../assets/header-logo.svg";

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
    <div className="h-[90vh] py-16 flex items-center justify-around">
      <div className="bg-base-cream-300 w-[540px] flex px-2 shadow-xl min-h-[90%]">
        <div className="w-14 flex flex-col items-center h-full gap-8 justify-around py-6 h-auto">
          <div
            className="cursor-pointer"
            onClick={() => {
              InfoSwap("sobre");
            }}
          >
            <img
              src={info == "sobre" ? IdentificationCardAlt : IdentificationCard}
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
            <img
              src={info == "experiencia" ? CircleWavyCheckAlt : CircleWavyCheck}
              alt=""
            />
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
          ></h1>
          <span className="text-justify">
            {info == "sobre" ? (
              <div>
                Me chamo{" "}
                <strong className="text-blue-600">Jorge Allende</strong>.{" "}
                <br /> <br />
                Tenho 22 anos. Sou de Mossoró-RN e atualmente estou cursando
                Ciência da Computação na Universidade Federal do Rio Grande do
                Norte. Sou apaixonado por tecnologia, programação e por artes
                visuais.
              </div>
            ) : info == "educacao" ? (
              <div>
                <strong className="text-orange-500">Ensino médio-técnico completo (2014 - 2017)</strong>
                <br />
                <span>
                  Completei o ensino médio no IFRN - Campus Mossoró, onde fiz
                  técnico-integrado em informática.
                </span>
                <br />
                <br />
                <strong  className="text-orange-500">
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
                <strong className="text-red-500">Estágio na Crevettic (2021 - 2022)</strong>
                <br />
                <br />
                <span>
                  Estagiei na empresa <strong>Crevettic</strong>, uma empresa
                  que desenvolve e mantem um sistema para auxilio de
                  piscicultura, como desenvolvedor web. Trabalhei desenvolvendo
                  e fazendo a manutenção de telas e componentes para a
                  plataforma. Utilizei tecnologias como React, JavaScript, HTML,
                  CSS entre outras.
                </span>
                <br />
                <br />
                <strong className="text-red-500">
                  Estágio em Prefeitura Municipal de Mossoró (2022 - Atualmente)
                </strong>
                <br />
                <br />
                <span>
                  Atualmente estou estagiando na{" "}
                  <strong>Prefeitura Municipal de Mossoró</strong> como
                  desenvolvedor web. Lá eu desenvolvo sistemas para todas as
                  áreas da gestão pública municipal, utilizando tecnologias como
                  PHP, Laravel, MySQL, HTML, CSS e JavaScript.
                </span>
                <br />
              </div>
            ) : info == "habilidades" ? (
              <div>
                No <strong className="text-mint-500 text-lg">front-end</strong>{" "}
                possuo muita familiaridade com <strong>React</strong> e todo seu
                ecossistema de bibliotecas, bem como <strong>HTML</strong>,{" "}
                <strong>CSS</strong> e <strong>JavaScript</strong>. Mais
                recentemente fui desafiado a trabalhar com{" "}
                <strong>Blade</strong> no ambiente do Laravel e tem sido uma
                ótima experiência de aprendizado.
                <br />
                <br />
                No <strong className="text-mint-500 text-lg">back-end</strong>,
                tenho conhecimento em <strong>PHP</strong>,{" "}
                <strong>Laravel</strong>, <strong>NodeJS</strong> e{" "}
                <strong>Java Spring</strong>. No quesito banco de dados já
                utilizei <strong>Postgres</strong>, <strong>MySQL</strong>,{" "}
                <strong>SQLite</strong>, <strong>MongoDB</strong> e outros.
                Também tenho conhecimento em <i>Git</i> e <i>GitHub</i>, e em
                ferramentas de design como <strong>Figma</strong> e{" "}
                <strong>Photoshop</strong>.
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      <div
        className={`text-end text-8xl font-black ${
          info == "sobre"
            ? "text-blue-600"
            : info == "educacao"
            ? "text-orange-500"
            : info == "experiencia"
            ? "text-red-600"
            : info == "habilidades"
            ? "text-mint-500"
            : ""
        } flex-1`}
      >
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
