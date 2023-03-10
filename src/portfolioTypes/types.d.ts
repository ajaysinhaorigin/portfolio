declare module '*.pdf'

type scrollListType = {
  id: number
  name: string
}

type skillsCardType = {
  id: number
  name: string
  logo: IconType
  urls: string
  color: string
}

type SocialMediaType = {
  id: number
  name: string
  logo: IconType
  urls: string
}

type ProjectsDataType = {
  id: number
  name: string
  imgUrls: string
  description: string
  techlonogies: string
  liveUrls: string
  codeUrls: string
}
type errorType = {
  nameError: string
  emailError: string
  messageError: string
}
