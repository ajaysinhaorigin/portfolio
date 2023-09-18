import { MdDownload } from 'react-icons/md'
import Cv from '../../../assets/cv/Ajay Resume.pdf'
function DownloadUrl() {
  return (
    <button className="mt-8 max-w-[16rem] mx-auto">
      <a
        href={Cv}
        download={true}
        className=" flex justify-center text-lg font-medium px-6 py-1 border-[1px]   rounded-xl text-[#1f2937] border-[#1f2937] hover:bg-[#1f2937] hover:text-[#fff] dark:border-[#fff] dark:text-[#fff] dark:hover:bg-[#fff] dark:hover:text-[#1f2937] duration-200"
      >
        <p> Download CV</p>
        <div className="py-1 ml-2">
          <MdDownload />
        </div>
      </a>
    </button>
  )
}

export default DownloadUrl
