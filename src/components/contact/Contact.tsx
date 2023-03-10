import { Element } from 'react-scroll'
import Heading from '../../reuseableComponents/Heading'
import Greetings from './components/Greetings'
import Form from './components/Form'
function Contact() {
  return (
    <>
      <Element name="Contact Me" className="container mx-auto">
        <Heading heading="Contect Me" alignment="text-center mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between align-middle  px-5 xl:px-16 lg:px-14 md:px-8 mb-16 md:mb-20">
          <Greetings />
          <Form />
        </div>
      </Element>
    </>
  )
}

export default Contact
