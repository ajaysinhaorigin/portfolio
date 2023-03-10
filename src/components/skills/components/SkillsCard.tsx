import { skillsData } from '../skillsData'
import SkillItem from './SkillItem'
function SkillsCard() {
  return (
    <>
      <div className="max-w-[28rem] lg:max-w-[36rem] m-auto">
        <div className="text-center">
          {skillsData.map((details) => (
            <SkillItem key={details.id} item={details} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillsCard
