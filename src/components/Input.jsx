import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { margin } from '../styles/sharedStyles'

export const sharedInputStyles = css`
  outline: none;
  border-radius: 6px;
  border: ${props => (props.error ? '2px solid' : '1px solid')};
  border-color: ${props =>
    props.error
      ? props.theme.colors.error
      : props.theme.colors.dolphinsBlue};
  width: ${props => props.width || '300px'};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.thin};
  padding: 4px 8px;
  font-weight: 300;

  ::placeholder {
    color: #8c8c8c8c;
  }
`

const StyledInput = styled.input`
  ${sharedInputStyles}
  height: 30px;
  margin-top: ${props => (props.hasLabel ? '8px' : '0')};
`

const StyledLabel = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  ${margin}
`

const Input = ({
  label,
  placeholder,
  flexDirection = 'column',
  handleChange,
  error,
  modifyText,
  ...rest
}) => {
  const [value, setValue] = useState('')
  const [isFocused, setFocus] = useState(false)

  const handleChangeInternal = e => {
    const { value } = e?.target
    setValue(modifyText ? modifyText(value) : value)

    if (handleChange) handleChange(value)
  }

  return (
    <StyledLabel flexDirection={flexDirection} {...rest}>
      {label && label}
      <StyledInput
        placeholder={placeholder}
        onChange={handleChangeInternal}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        active={isFocused}
        hasLabel={!!label}
        error={error}
      />
    </StyledLabel>
  )
}

export default Input
