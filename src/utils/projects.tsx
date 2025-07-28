import CrevetticLogo from "../assets/crevettic.png";
import DuoFinderLogo from "../assets/duofinderlogo.svg";
import StairsLogo from "../assets/stairs_icon.png";
import PrefeituraLogo from "../assets/logo-mossoro.png";
import LeonLogo from "../assets/leon-logo.png";
import SaoLucasLogo from "../assets/sao-lucas-logo.png";
import NucleoHumanescerLogo from "../assets/nucleo-humanescer-logo.png";

export interface Project {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkTitle: string;
  technologies: string[];
}

export interface ProjectCategory {
  name: string;
  color: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    name: "Faculdade",
    color: "orange",
    projects: [
      {
        name: "e-Sports Duo Finder",
        description:
          "O projeto Duo Finder foi desenvolvido na semana NLW eSports promovida pela RocketSeat. O projeto a seguir é uma versão melhorada do projeto final apresentado nas aulas. Tomei a liberdade de evoluir o código para praticar as ferramentas que foram ensinadas durante a semana.",
        imgSrc: DuoFinderLogo,
        link: "https://github.com/jorgeallende/esports-duo-finder",
        linkTitle: "GitHub",
        technologies: ["React", "Spring"],
      },
      {
        name: "Stairs",
        description:
          "Stairs foi o projeto de uma hotelaria desenvolvido na disciplina de Engenharia de Software. O projeto foi desenvolvido em grupo e eu fui o responsável pela parte de front-end e a integração de front-end e back-end.",
        imgSrc: StairsLogo,
        link: "https://github.com/jorgeallende/StairsHotelaria",
        linkTitle: "GitHub",
        technologies: ["React", "Spring"],
      },
      {
        name: "Leon",
        description:
          "O Leon foi um projeto desenvolvido em equipe. O produto final era um sistema de uma academia inteligente, onde os alunos poderiam saber os horários de pico, marcar aulas coletivas ou até mesmo conferir a quantidade de pessoas treinando no momento. Um projeto bastante desafiador para a época e que foi essencial para meu crescimento em React.",
        imgSrc: LeonLogo,
        link: "https://github.com/jorgeallende/web-leon",
        linkTitle: "GitHub",
        technologies: ["React"],
      },
    ],
  },
  {
    name: "Crevettic",
    color: "red",
    projects: [
      {
        name: "Plataforma de Psicultura Crevettic",
        description:
          "É uma solução focada na gestão de conhecimento e inteligência de negócio das fazendas de camarão e peixe, capaz de oferecer sugestões aos produtores por meio de análises de dados que utilizam técnicas de mineração de dados e gera relatórios gráficos dinâmicos para auxiliar na tomada de decisão.",
        imgSrc: CrevetticLogo,
        link: "https://repositorio.ufersa.edu.br/items/b192a26c-a9b8-416d-b2d5-6e7b16311afc",
        linkTitle: "Site Crevettic",
        technologies: ["React", "Nest"],
      },
    ],
  },
  {
    name: "Prefeitura de Mossoró",
    color: "blue",
    projects: [
      {
        name: "Sistema de RH",
        description:
          "Sistema completo de gestão de recursos humanos para a Prefeitura de Mossoró, incluindo controle de funcionários, folha de pagamento, gestão de benefícios e relatórios administrativos.",
        imgSrc: PrefeituraLogo,
        link: "#",
        linkTitle: "Em desenvolvimento",
        technologies: ["React", "Ruby on Rails"],
      },
      {
        name: "Site da Prefeitura",
        description:
          "Desenvolvi em equipe o site oficial da Prefeitura de Mossoró. O site foi desenvolvido em PHP utilizando Laravel. Foi onde tive meu primeiro contato com o framework e sou responsável pelo desenvolvimento front-end das páginas e componentes.",
        imgSrc: PrefeituraLogo,
        link: "https://www.prefeiturademossoro.com.br",
        linkTitle: "Prefeitura de Mossoró",
        technologies: ["Laravel"],
      },
      {
        name: "Portal da Transparência",
        description:
          "Portal de transparência pública com informações sobre gastos, contratos, licitações e dados abertos da Prefeitura de Mossoró, garantindo o acesso à informação pelos cidadãos.",
        imgSrc: PrefeituraLogo,
        link: "https://prefeiturademossoro.com.br/transparencia",
        linkTitle: "Portal da Transparência",
        technologies: ["Laravel"],
      },
      {
        name: "Tempus",
        description:
          "Sistema de controle de ponto eletrônico para servidores municipais, com funcionalidades de registro de entrada/saída, banco de horas e relatórios de frequência.",
        imgSrc: PrefeituraLogo,
        link: "#",
        linkTitle: "Em desenvolvimento",
        technologies: ["React", "Ruby on Rails"],
      },
      {
        name: "Funcidat",
        description:
          "Sistema de gestão da Fundação Cultural de Mossoró (Funcidat), incluindo controle de eventos culturais, cadastro de artistas e gestão de equipamentos culturais da cidade.",
        imgSrc: PrefeituraLogo,
        link: "https://funcidat.mossoro.rn.gov.br/",
        linkTitle: "Em desenvolvimento",
        technologies: ["React", "Ruby on Rails"],
      },
      {
        name: "Mossoró Participativa",
        description:
          "O Mossoró Participativa é uma ferramenta que permite ao cidadão participar ativamente da construção do futuro da cidade, contribuindo com ideias e sugestões para a definição das prioridades do Governo Municipal no Plano Plurianual – PPA 2026–2029.",
        imgSrc: PrefeituraLogo,
        link: "https://participativa.mossoro.rn.gov.br/",
        linkTitle: "Mossoró Participativa",
        technologies: ["React", "Ruby on Rails"],
      },
    ],
  },
  {
    name: "Freela",
    color: "green",
    projects: [
      {
        name: "Núcleo Humanescer",
        description:
          "Plataforma web para o Núcleo Humanescer, focada em desenvolvimento humano e crescimento pessoal. Inclui sistema de agendamento de consultas, blog e área administrativa para gestão de conteúdo.",
        imgSrc: NucleoHumanescerLogo,
        link: "#",
        linkTitle: "Em desenvolvimento",
        technologies: ["React", "Nest"],
      },
      {
        name: "Funerária São Lucas",
        description:
          "Sistema de gestão completo para funerária, incluindo gestão de clientes, falecidos e até uma plataforma de memorial digital.",
        imgSrc: SaoLucasLogo,
        link: "https://saolucaspdf.com.br/",
        linkTitle: "São Lucas PDF",
        technologies: ["React", "Nest"],
      },
    ],
  },
];

// Mantendo compatibilidade com código existente
export const projects = projectCategories.flatMap(
  (category) => category.projects
);
