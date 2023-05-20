import { BsSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
interface Props {
  theme: string
  setTheme: (theme: string) => void
}

function ModeIcons({ theme, setTheme }: Props) {
  const options = [
    {
      icon: <BsSunFill />,
      mode: 'light',
    },
    {
      icon: <BsMoonStarsFill />,
      mode: 'dark',
    },
  ]
  return (
    <>
      <div className="flex">
        {options?.map((option) => (
          <button
            key={option.mode}
            onClick={() => setTheme(option.mode)}
            className={`text-lg rounded-full mx-2 ${
              theme === option.mode && 'text-yellow-300'
            } `}
          >
            {theme !== option.mode && option.icon}
          </button>
        ))}
        <a
          href="mailto:withajaysinha@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="ml-4 hidden lg:block border-[1px] border-[#1f2937]  dark:border-white rounded-full px-3 py-1 hover:bg-[#1f2937] hover:text-white dark:hover:bg-white dark:hover:text-[#1f2937] duration-200">
            Let's talk
          </p>
        </a>
      </div>
    </>
  )
}

export default ModeIcons
