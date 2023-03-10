import { AiOutlineMenu } from 'react-icons/ai'
interface Props {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
function MenuBar({ showMenu, setShowMenu }: Props) {
  return (
    <div className="pr-1 md:hidden ">
      <div className="flex flex-start">
        {showMenu && (
          <AiOutlineMenu
            className="text-2xl font-bold my-2"
            onClick={() => setShowMenu(false)}
          />
        )}
      </div>
    </div>
  )
}

export default MenuBar
