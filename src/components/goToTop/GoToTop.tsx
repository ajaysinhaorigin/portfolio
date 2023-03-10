import { useState, useEffect } from 'react'
import { Link as Scroll } from 'react-scroll'
import { FaCaretUp } from 'react-icons/fa'
function GoToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const listenToScroll = () => {
    let hightToHidden: number = 400
    const windowSroll: number =
      document.body.scrollTop || document.documentElement.scrollTop

    if (windowSroll > hightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <Scroll
          to="Home"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer"
        >
          <div className="z-20 fixed bottom-5 lg:bottom-12 right-4 bg-gray-300 rounded-full p-2 text-xl lg:text-xl text-[#1f2937] dark:bg-gray-400">
            <FaCaretUp />
          </div>
        </Scroll>
      )}
    </>
  )
}

export default GoToTop
