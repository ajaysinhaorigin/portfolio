import { MdEmail } from 'react-icons/md'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
export const socialMediaData: SocialMediaType[] = [
  {
    id: 1,
    name: 'LinkdedIn',
    logo: FaLinkedinIn,
    urls: 'https://www.linkedin.com/in/ajaysinhaorigin/',
  },
  {
    id: 2,
    name: 'Github',
    logo: FaGithub,
    urls: 'https://github.com/ajaysinhaorigin',
  },
  {
    id: 3,
    name: 'Instagram',
    logo: FaInstagram,
    urls: 'https://www.instagram.com/ajaysinhaorigin/',
  },
  {
    id: 4,
    name: 'Mail',
    logo: MdEmail,
    urls: 'mailto:withajaysinha@gmail.com',
  },
]
