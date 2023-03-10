import bigImg from '../../../assets/myImage/myBigImg.png'

function BigImage() {
  return (
    <div className="mt-4 justify-items-end hidden md:block h-[85%] rounde-full">
      <img src={bigImg} alt="" className="w-full h-full bg-contain" />
    </div>
  )
}

export default BigImage
