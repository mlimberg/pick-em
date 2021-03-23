import { useCallback, useRef, useState } from 'react'

const useField = (props) => {
  const [value, setValu] = useState('')

  return {
    name,
    value,
    hasError: false,
    onBlur,
    onChange,
    clearField,
  }
}

export default useField
