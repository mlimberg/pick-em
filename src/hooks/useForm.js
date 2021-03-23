import { useCallback, useRef, useState } from 'react'

const useForm = (props) => {
  const [submitting, setSubmitting] = useState(false)
  const fields = useRef([])

  const getFormData = useCallback(() => {
    fields.current.reduce((formData, { value, name }) => {
      formData[name] = value

      return formData
    }, {})
  })

  const handleSubmit = () => {
    setSubmitting(true)
    //TODO: need more here
  }

  const clearFields = useCallback(
    () => fields.current.forEach((field) => field.clearField()),
    [],
  )

  return {
    getFormData,
    onSubmit: handleSubmit,
    clearFields,
  }
}

export default useForm
