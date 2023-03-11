import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { Validator } from '../utils/Validator'

const errorState: errorType = {
  nameError: '',
  emailError: '',
  messageError: '',
}

function useCustomFormHook() {
  const [formError, setFormError] = useState<errorType>(errorState)
  const form: any = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()
    if (Validator({ e, formError, setFormError })) {
      emailjs
        .sendForm(
          'service_dwnb0il',
          'template_wzq2y6w',
          form.current,
          'bVPp9AQCJ3RyyDvJG'
        )
        .then(
          (result) => {
            console.log('message sent')
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
            toast.success('Message Sent Successfully')
          },
          (error) => {
            toast.error('Bad Credentials !')
          }
        )
    }
    setTimeout(() => {
      setFormError({
        ...formError,
        nameError: '',
        emailError: '',
        messageError: '',
      })
    }, 3000)
  }
  return { form, formError, setFormError, sendEmail }
}

export default useCustomFormHook
