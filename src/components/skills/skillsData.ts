import { DiJavascript, DiReact } from "react-icons/di"
import { FaGithub, FaNodeJs } from "react-icons/fa"
import { TbBrandRedux, TbBrandTypescript, TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss, SiMobx, SiMongodb } from "react-icons/si"

export const skillsData: skillsCardType[] = [
  {
    id: 1,
    name: "React.js",
    logo: DiReact,
    urls: "https://beta.reactjs.org/",
    color: "#5ED4F4",
  },
  {
    id: 2,
    name: "Next.js",
    logo: TbBrandNextjs,
    urls: "https://nextjs.org/docs/getting-started",
    color: "#1976d2",
  },
  {
    id: 3,
    name: "React Native",
    logo: DiReact,
    urls: "https://reactnative.dev/docs/environment-setup",
    color: "#28A4D9",
  },
  {
    id: 4,
    name: "JavaScript",
    logo: DiJavascript,
    urls: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#EFD81D",
  },
  {
    id: 5,
    name: "TypeScript",
    logo: TbBrandTypescript,
    urls: "https://www.typescriptlang.org/",
    color: "#1976d2",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    logo: SiTailwindcss,
    urls: "https://tailwindcss.com/",
    color: "#28A4D9",
  },
  {
    id: 7,
    name: "Material UI",
    logo: SiTailwindcss,
    urls: "https://mui.com/material-ui/getting-started/",
    color: "#28A4D9",
  },
  {
    id: 8,
    name: "Mobx",
    logo: SiMobx,
    urls: "https://mobx.js.org/README.html",
    color: "#5ED4F4",
  },
  {
    id: 9,
    name: "Redux-toolkit",
    logo: TbBrandRedux,
    urls: "https://redux.js.org/",
    color: "#7e57c2",
  },
  // {
  //   id: 9,
  //   name: "HTML5",
  //   logo: DiHtml5,
  //   urls: "https://www.w3schools.com/html/",
  //   color: "#F06529",
  // },
  // {
  //   id: 10,
  //   name: 'CSS3',
  //   logo: DiCss3,
  //   urls: 'https://www.w3schools.com/css/',
  //   color: '#0277bd',
  // },
  {
    id: 10,
    name: "MongoDb",
    logo: SiMongodb,
    urls: "https://www.mongodb.com/",
    color: "#0277bd",
  },
  {
    id: 11,
    name: "Nodejs",
    logo: FaNodeJs,
    urls: "https://nodejs.org/docs/latest/api/",
    color: "#0277bd",
  },
  {
    id: 12,
    name: "Github",
    logo: FaGithub,
    urls: "https://docs.github.com/en",
    color: "#393939",
  },
]
