import { Element } from 'react-scroll'
import MainIntro from './components/MainIntro'
import SocialMedia from '../../reuseableComponents/socialMedia/SocialMedia'
import BigImage from './components/BigImage'

function Home() {
  return (
    <>
      <Element
        name="Home"
        className="grid grid-cols-1 md:grid-cols-2 justify-between px-4 xl:px-20 lg:px-14 md:px-8 mb-12 "
      >
        <div className="pt-20 xl:pt-44 lg:pt-28 md:pt-24">
          <MainIntro />
          <SocialMedia
            smTextSize="text-xl animated_text"
            lgTextSize="text-2xl"
          />
        </div>
        <BigImage />
      </Element>
    </>
  )
}

export default Home
