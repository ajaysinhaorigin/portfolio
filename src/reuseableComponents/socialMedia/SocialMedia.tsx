import { socialMediaData } from './socialMediaData'
import SocialMediaCard from './SocialMediaCard'
function SocialMedia({
  smTextSize,
  lgTextSize,
}: {
  smTextSize: string
  lgTextSize: string
}) {
  return (
    <>
      <div className={` flex ${smTextSize} lg:${lgTextSize}`}>
        {socialMediaData.map((icon) => (
          <SocialMediaCard key={icon.id} icon={icon} />
        ))}
      </div>
    </>
  )
}

export default SocialMedia
