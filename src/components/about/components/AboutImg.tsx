import profileImg from '../../../assets/myImage/profileImg.png'

function AboutImg() {
  return (
    <div className="justify-start">
      <div className="mx-auto lg:m-0  max-w-[18rem] max-h-[18rem]  rounded-full bg-yellow-300 overflow-hidden">
        <img src={profileImg} alt="" className="w-full h-full p-1" />
      </div>
    </div>
  )
}

export default AboutImg
