import AboutImg from './components/AboutImg'
import AboutText from './components/AboutText'

function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center align-middle px-4 xl:px-40 lg:px-14 md:px-8 mb-16 md:mb-28">
        <AboutImg />
        <AboutText />
      </div>
    </>
  )
}

export default About
