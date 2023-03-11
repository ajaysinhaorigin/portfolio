import useCustomFormHook from '../../../hooks/customFormHook'

function Form() {
  const { form, formError, sendEmail } = useCustomFormHook()

  return (
    <div className="lg:ml-16">
      <div className="flex flex-col">
        <div className="my-7 lg:my-12">
          <p>Don't be shy ! Feel Free to Get In Touch</p>
          <p>Drop a Message 💗 !</p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <ul className="list-none">
            <li className="rounded mb-6">
              <span
                className={
                  formError.nameError !== ''
                    ? 'text-red-500 px-2 text-base'
                    : ''
                }
              >
                {formError.nameError !== '' ? formError.nameError : ''}
              </span>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-[.35rem] rounded border-[1px] shadow-md border-gray-300 focus:outline-none  text-gray-400 text-base md:text-lg dark:bg-transparent"
              />
            </li>
            <li className="rounded mb-6">
              <span
                className={
                  formError.emailError !== ''
                    ? 'text-red-500 px-2 text-base'
                    : ''
                }
              >
                {formError.emailError !== '' ? formError.emailError : ''}
              </span>
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-[.35rem] rounded border-[1px] shadow-md border-gray-300 focus:outline-none  text-gray-400 text-base md:text-lg dark:bg-transparent"
              />
            </li>
            <li className="rounded mb-6">
              <span
                className={
                  formError.messageError !== ''
                    ? 'text-red-500 px-2 text-base'
                    : ''
                }
              >
                {formError.messageError !== '' ? formError.messageError : ''}
              </span>
              <textarea
                placeholder="Message"
                name="message"
                className="w-full h-32 px-3 py-[.36rem] rounded border-[1px] shadow-md border-gray-300 focus:outline-none  text-gray-400 text-base md:text-lg dark:bg-transparent"
              ></textarea>
            </li>
            <li className="text-start">
              <input
                type="submit"
                value="Send Message"
                className="bg-gray-200 text-[#1f2937] px-4 py-[0.35rem] md:px-6 md:py-[0.4rem] rounded duration-200 text-base md:text-lg cursor-pointer"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Form
