import { Element } from 'react-scroll'
import Heading from '../../reuseableComponents/Heading'
import CvImg from './components/CvImg'
import DownloadUrl from './components/DownloadUrl'

function Resume() {
  return (
    <>
      <Element
        name="Resume"
        className="px-3 xl:px-20 lg:px-14 md:px-8 mb-16 md:mb-28"
      >
        <Heading heading="Resume" alignment="text-center mb-8" />
        <div
          className="flex flex-col
           justify-center"
        >
          <CvImg />
          <DownloadUrl />
        </div>
      </Element>
    </>
  )
}

export default Resume
