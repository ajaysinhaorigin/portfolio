import { Element } from 'react-scroll'
import Heading from '../../reuseableComponents/Heading'
import ProjectCard from './components/ProjectsCard'

function Projects() {
  return (
    <>
      <Element
        name="Projects"
        className="px-4 xl:px-20 lg:px-14 md:px-8 mb-16 md:mb-28"
      >
        <Heading heading="Projects" alignment="text-center mb-8" />
        <ProjectCard />
      </Element>
    </>
  )
}

export default Projects
