import { useState, useEffect } from 'react'
import AnimatedLetters from '../../../reuseableComponents/animateLetters/AnimatedLetters'

function ProjectsHeading() {
  const [letterClass, setLetterClass] = useState<string>('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <h1 className="text-[#fff] text-4xl md:text-5xl 2xl:text-6xl mb-12 text-center">
      <span className="">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['R', 'e', 'c', 'e', 'n', 't', ' ']}
          idx={15}
        />
      </span>
      <span className="">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P ', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </span>
    </h1>
  )
}

export default ProjectsHeading
