import { Element } from 'react-scroll'
import Heading from '../../reuseableComponents/Heading'
import SkillsCard from './components/SkillsCard'

function Skills() {
  return (
    <>
      <Element name="Skills" className="mb-16 md:mb-28">
        <Heading heading="skills" alignment="text-center mb-8" />
        <SkillsCard />
      </Element>
    </>
  )
}

export default Skills
