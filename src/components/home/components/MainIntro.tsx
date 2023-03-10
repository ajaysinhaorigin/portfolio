import { useState, useEffect } from 'react'
import AnimatedLetters from '../../../reuseableComponents/animateLetters/AnimatedLetters'

function MainIntro() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const introArray = ['H', 'i', '👋', ',', ' ']
  const nameArray = [
    'I',
    "'",
    'm',
    ' ',
    'A',
    'j',
    'a',
    'y',
    ' ',
    'S',
    'i',
    'n',
    'h',
    'a',
    ' ',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="mb-2">
        <h1 className="text-[#1f2937] dark:text-white text-5xl 2xl:text-7xl xl:text-6xl lg:text-6xl mb-3 lg:mb-6">
          <span className="block mb-2">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introArray}
              idx={10}
            />
          </span>
          <span className="text-[#1f2937] dark:text-white">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
          </span>
        </h1>
        <div className="text-sm md:text-base tracking-[2px]  lg:traking-[2px]">
          <p className="animated_text">
            I am addicted with developing beautiful websites
          </p>
        </div>
      </div>
    </>
  )
}

export default MainIntro
