import { FiLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
function ProjectItem({
  name,
  imgUrls,
  description,
  techlonogies,
  liveUrls,
  codeUrls,
}: {
  name: string
  imgUrls: string
  description: string
  techlonogies: string
  liveUrls: string
  codeUrls: string
}) {
  return (
    <>
      <div className="max-w-[40rem] bg-[#fff] dark:bg-[#1f2937] shadow-xl">
        <div className="max-w-[40rem] max-h-[25rem]">
          <img src={imgUrls} alt="" className="w-full h-full" />
        </div>

        <div className="px-4 py-3">
          <div className="">
            <h2 className="text-xl font-medium">{name}</h2>
            <p>{description}</p>
            <p className="text-sm mt-2">Techlonogies : {techlonogies}</p>
          </div>

          <div className="flex mt-4 mb-2">
            <a
              href={liveUrls}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-medium pr-2"
            >
              <FiLink />
            </a>
            <a
              href={codeUrls}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-medium"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
