import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di'
import { FaGithub, FaBootstrap } from 'react-icons/fa'
import { TbBrandRedux, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'

export const skillsData: skillsCardType[] = [
  {
    id: 1,
    name: 'HTML5',
    logo: DiHtml5,
    urls: 'https://www.w3schools.com/html/',
    color: '#F06529',
  },
  {
    id: 2,
    name: 'CSS3',
    logo: DiCss3,
    urls: 'https://www.w3schools.com/css/',
    color: '#0277bd',
  },
  {
    id: 3,
    name: 'Bootstrap',
    logo: FaBootstrap,
    urls: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
    color: '#28A4D9',
  },
  {
    id: 4,
    name: 'Tailwind',
    logo: SiTailwindcss,
    urls: 'https://tailwindcss.com/',
    color: '#28A4D9',
  },
  {
    id: 5,
    name: 'JavaScript',
    logo: DiJavascript,
    urls: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#EFD81D',
  },
  {
    id: 6,
    name: 'TypeScript',
    logo: TbBrandTypescript,
    urls: 'https://www.typescriptlang.org/',
    color: '#1976d2',
  },
  {
    id: 7,
    name: 'React',
    logo: DiReact,
    urls: 'https://beta.reactjs.org/',
    color: '#5ED4F4',
  },
  {
    id: 8,
    name: 'Redux',
    logo: TbBrandRedux,
    urls: 'https://redux.js.org/',
    color: '#7e57c2',
  },
  {
    id: 9,
    name: 'Github',
    logo: FaGithub,
    urls: 'https://docs.github.com/en',
    color: '#393939',
  },

  {
    id: 10,
    name: 'NextJs',
    logo: TbBrandNextjs,
    urls: 'https://nextjs.org/docs/getting-started',
    color: '#1976d2',
  },
]
