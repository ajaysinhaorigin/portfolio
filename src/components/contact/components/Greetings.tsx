import SocialMedia from '../../../reuseableComponents/socialMedia/SocialMedia'
function Greetings() {
  return (
    <>
      <div className="border-transparent border-r-[1px] lg:border-r-gray-400">
        <h1 className="text-5xl lg:text-9xl">I would Love to Here from You</h1>
        <div className="mt-2 lg:mt-4">
          <p className="text-sm lg:text-base mb-2">You can also find me here</p>
          <SocialMedia smTextSize="text-lg" lgTextSize="text-xl" />
        </div>
      </div>
    </>
  )
}

export default Greetings
