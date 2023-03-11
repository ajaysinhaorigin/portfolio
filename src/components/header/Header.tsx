import { useState } from 'react'
import { Link as Scroll } from 'react-scroll'
import ScrollList from './components/ScrollList'
import useCustomTheme from '../../hooks/CustomThemeHook'
import { ScrollListData } from './ScrollListData'
import HeaderLogo from './components/HeaderLogo'
import ModeIcons from './components/ModeIcons'
import MenuBar from './components/MenuBar'

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(true)
  const { theme, setTheme } = useCustomTheme()

  return (
    <>
      {/* Vertical scroll list component */}
      <ScrollList showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* Header navbar */}
      <nav className="w-full navbar px-4 py-2 md:px-8 bg-white dark:bg-[#1f2937]">
        <div className="flex justify-between align-baseline">
          <MenuBar showMenu={showMenu} setShowMenu={setShowMenu} />
          {/* component  and logo  */}
          <HeaderLogo />
          <div className="hidden md:flex">
            <ul className="flex justify-between py-2">
              {ScrollListData.map(
                (item) =>
                  item.name !== 'Home' && (
                    <Scroll
                      to={item.name}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      key={item.id}
                      className="mx-3 text-sm lg:mx-8 lg:text-base font-medium text-gray-400 hover:text-[#1f2937] dark:hover:text-white duration-100 cursor-pointer"
                    >
                      {item.name}
                    </Scroll>
                  )
              )}
            </ul>
          </div>
          {/* component that implement light and dark mode */}
          <ModeIcons theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </>
  )
}

export default Header
