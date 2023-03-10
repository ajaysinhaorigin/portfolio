import cvImg from '../../../assets/cv/cv-img.jpeg'
function CvImg() {
  return (
    <div
      className="max-w-[56rem] max-h-[16rem] mx-auto overflow-hidden rounded-t-xl md:rounded-t-2xl xl:rounded-t-3xl border-0 resume_img"
      style={{
        background: `linear-gradient(
                        rgba(255, 255, 255, 0) 0%,
                        rgb(255, 255, 255) 100%
                             )`,
        boxShadow: 'lightgrey 0px -8.5px 10px 0px',
      }}
    >
      <img src={cvImg} alt="resume_img" />
    </div>
  )
}

export default CvImg
