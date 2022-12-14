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

type Props = { F; src?: string | undefined };

const AboutComponent = () => {
  const [info, setInfo] = useState("sobre");

  function InfoSwap(newInfo: string) {
    console.log(newInfo);
    setInfo(newInfo);
  }

  return (
    <div className="h-full my-16 pt-24 sm:pt-0 flex items-center justify-around flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
      <div className="bg-base-cream-300  w-11/12 sm:w-9/12 md:w-[540px] flex flex-col sm:flex-row px-2 shadow-xl h-full ">
        <div className="sm:w-14 flex flex-row md:flex-col items-center gap-8 justify-around py-6">
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
        <div className="h-1 w-full sm:w-1 sm:h-auto bg-base-cream-600 flex sm:flex-col z-50">
          <div
            className={`h-full w-full flex-1 ${
              info == "sobre" ? "bg-blue-600" : ""
            }`}
          ></div>
          <div
            className={`h-full w-full sm:h-full sm:w-1 flex-1 ${
              info == "educacao" ? "bg-orange-500" : ""
            }`}
          ></div>
          <div
            className={`h-full w-full sm:h-full sm:w-1 flex-1 ${
              info == "experiencia" ? "bg-red-600" : ""
            }`}
          ></div>
          <div
            className={`h-full w-full sm:h-full sm:w-1 flex-1 ${
              info == "habilidades" ? "bg-mint-500" : ""
            }`}
          ></div>
        </div>
        <div className="px-3 sm:px-6 py-6 flex flex-col gap-4 flex-1">
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
                <strong className="text-blue-600">Jorge Allende</strong>. <br />{" "}
                <br />
                Tenho 22 anos. Moro em Mossor??-RN, onde nasci e fui criado.
                Sempre tive uma inclina????o para inform??tica e sempre sonhei me
                seguir na ??rea. Hoje estou cursando{" "}
                <strong className="text-blue-600">
                  Ci??ncia da Computa????o
                </strong>{" "}
                na Universidade Federal Rural do Rio Grande do Norte e me indentifico
                muito com minha gradua????o. Sou apaixonado por tecnologia,
                programa????o e, tamb??m, por artes visuais.
              </div>
            ) : info == "educacao" ? (
              <div>
                <strong className="text-orange-500">
                  Ensino m??dio-t??cnico completo (2014 - 2017)
                </strong>
                <br />
                <span>
                  Completei o ensino m??dio no IFRN - Campus Mossor??, onde fiz
                  t??cnico-integrado em inform??tica.
                </span>
                <br />
                <br />
                <strong className="text-orange-500">
                  Ensino superior em andamento (2018 - Atualmente)
                </strong>
                <br />
                <span>
                  Atualmente fa??o Ci??ncia da Computa????o na UFERSA - Campus
                  Mossor??.
                </span>
              </div>
            ) : info == "experiencia" ? (
              <div>
                <strong className="text-red-500">
                  Est??gio na Crevettic (2021 - 2022)
                </strong>
                <br />
                <br />
                <span>
                  Estagiei na empresa <strong>Crevettic</strong>, 
                  que desenvolve e mantem um sistema para auxilio de
                  piscicultura, como desenvolvedor web. Trabalhei desenvolvendo
                  e fazendo a manuten????o de telas e componentes para a
                  plataforma. Utilizei tecnologias como React, JavaScript, HTML,
                  CSS entre outras.
                </span>
                <br />
                <br />
                <strong className="text-red-500">
                  Est??gio em Prefeitura Municipal de Mossor?? (2022 - Atualmente)
                </strong>
                <br />
                <br />
                <span>
                  Atualmente estou estagiando na{" "}
                  <strong>Prefeitura Municipal de Mossor??</strong> como
                  desenvolvedor web. L?? eu desenvolvo sistemas para todas as
                  ??reas da gest??o p??blica municipal, utilizando tecnologias como
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
                ??tima experi??ncia de aprendizado.
                <br />
                <br />
                No <strong className="text-mint-500 text-lg">back-end</strong>,
                tenho conhecimento em <strong>PHP</strong>,{" "}
                <strong>Laravel</strong>, <strong>NodeJS</strong> e{" "}
                <strong>Java Spring</strong>. No quesito banco de dados j??
                utilizei <strong>Postgres</strong>, <strong>MySQL</strong>,{" "}
                <strong>SQLite</strong>, <strong>MongoDB</strong> e outros.
                Tamb??m tenho conhecimento em <i>Git</i> e <i>GitHub</i>, e em
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
        className={`text-end text-5xl sm:text-6xl lg:text-7xl font-black ${
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
