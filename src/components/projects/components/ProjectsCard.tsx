import { PorjectsData } from '../ProjectsData'
import ProjectItem from './ProjectItem'

function ProjectCard() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 align-center justify-center">
        {PorjectsData.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
