import { Link as Scroll } from 'react-scroll'
import Heading from '../../../reuseableComponents/Heading'
function HeaderLogo() {
  return (
    <>
      <Scroll
        to="Home"
        smooth={true}
        duration={500}
        offset={-100}
        className="flex align-middle cursor-pointer"
      >
        <Heading heading="ajaysinhaorigin" alignment="text-[1.32rem]" />
      </Scroll>
    </>
  )
}

export default HeaderLogo
