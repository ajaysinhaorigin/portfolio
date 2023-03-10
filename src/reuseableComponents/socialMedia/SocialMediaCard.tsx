interface Props {
  icon: SocialMediaType
}
function SocialMediaCard({ icon }: Props) {
  const { urls } = icon
  return (
    <a href={urls} target="_blank" rel="noreferrer">
      <icon.logo className="text-[#1f2937] dark:text-[#fff] mr-3 duration-300 cursor-pointer" />
    </a>
  )
}

export default SocialMediaCard
