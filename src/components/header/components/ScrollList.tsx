import { Link as Scroll } from 'react-scroll'
import { ScrollListData } from '../ScrollListData'
import { AiOutlineClose } from 'react-icons/ai'
interface Props {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
function ScrollList({ showMenu, setShowMenu }: Props) {
  return (
    <>
      {!showMenu && (
        <div className="fixed h-full w-full z-20 bg-[#1f2937] dark:bg-[#fff] text-center lg:hidden pb-12">
          <div className="p-1">
            <AiOutlineClose
              className="text-3xl text-[#1f2937] dark:text-[#fff] bg-[#fff] dark:bg-[#1f2937] rounded-full m-2 p-1"
              onClick={() => setShowMenu(true)}
            />
          </div>
          <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
            {ScrollListData.map((item) => (
              <Scroll
                to={item.name}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-lg m-1 text-[#fff] hover:text-gray-400 dark:text-[#1f2937] dark:hover:text-gray-400 cursor-pointer "
                onClick={() => setShowMenu(true)}
              >
                {item.name}
              </Scroll>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
export default ScrollList
