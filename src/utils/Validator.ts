const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

interface Props {
  e: any
  formError: errorType
  setFormError: React.Dispatch<React.SetStateAction<errorType>>
}

export const Validator = ({ e, formError, setFormError }: Props) => {
  if (e.target[0].value === '') {
    setFormError({
      ...formError,
      nameError: 'Please Enter Your Name',
    })
    return false
  } else if (e.target[1].value === '') {
    setFormError({
      ...formError,
      emailError: 'Please Enter Your Email',
    })
    return false
  } else if (EMAIL_PATTERN.test(e.target[1].value) === false) {
    setFormError({
      ...formError,
      emailError: 'Please Enter a Valid Email',
    })
    return false
  } else if (e.target[2].value === '') {
    setFormError({
      ...formError,
      messageError: 'Please Leave Your Message',
    })
    return false
  } else {
    return true
  }
}
