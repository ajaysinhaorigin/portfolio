interface Props {
  item: skillsCardType
}
function SkillItem({ item }: Props) {
  const { urls, name, color } = item
  return (
    <button className="m-2 rounded-xl  shadow-lg ">
      <a
        href={urls}
        target="_blank"
        rel="noreferrer"
        className="text-[#1f2937] dark:text-white"
      >
        <div className="flex p-3">
          <div className="pr-2">
            {typeof item.logo === "string" ? (
              // Render as an image if it's a URL string
              <img src={item.logo} alt="logo" className="h-7 w-7" />
            ) : (
              // Render as a React component if it's not a string
              <item.logo color={color} className="h-7 w-7" />
            )}
          </div>
          <p className="text-lg font-medium">{name}</p>
        </div>
      </a>
    </button>
  )
}

export default SkillItem
