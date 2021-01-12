import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  outline: none;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.dolphinsBlue};
  height: 30px;
  width: ${props => props.width || '300px'};
  font-size: 20px;
  margin-top: 8px;
  font-weight: 100;
  font-family: ${props => props.theme.fonts.thin};
  padding: 2px;
  padding-left: 4px;
`

const StyledLabel = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin: ${props => props.margin || props.m};
  margin-left: ${props => props.ml || props.marginLeft || props.mx};
  margin-top: ${props => props.mt || props.marginTop || props.my};
  margin-right: ${props => props.mr || props.marginRight || props.mx};
  margin-bottom: ${props => props.mb || props.marginBottom || props.my};
`

const Input = ({
  label,
  placeholder,
  flexDirection = 'column',
  ...rest
}) => {
  const [value, setValue] = useState('')
  const [isFocused, setFocus] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <StyledLabel
      flexDirection={flexDirection}
      {...rest}
    >
      {label}
      <StyledInput
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        active={isFocused}
      />
    </StyledLabel>

  )
}

export default Input
