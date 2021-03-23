import React, { useState } from 'react'
import styled from 'styled-components'
import { sharedInputStyles } from './Input'
import { margin } from '../styles/sharedStyles'

const StyledTextArea = styled('textarea')`
  ${sharedInputStyles}
  ${margin}
  height: ${props => props.height || '100px'};
`

const TextArea = ({ handleChange, ...rest }) => {
  const [value, setValue] = useState('')
  const handleChangeInternal = e => {
    const { value } = e?.target
    setValue(value)

    if (handleChange) handleChange(value)
  }

  return (
    <StyledTextArea
      value={value}
      onChange={handleChangeInternal}
      {...rest}
    />
  )
}

export default TextArea
