import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from './Loader'

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  height: ${props => props.height || '40px'};
  width: ${props => props.width};
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.darkGray};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  border-radius: 3px;
  font-size: 20px;
  padding: ${props => props.padding};
  margin: ${props => props.margin || props.m};
  margin-left: ${props => props.ml || props.marginLeft || props.mx};
  margin-top: ${props => props.mt || props.marginTop || props.my};
  margin-right: ${props => props.mr || props.marginRight || props.mx};
  margin-bottom: ${props => props.mb || props.marginBottom || props.my};

  :disabled {
    cursor: not-allowed;
  }
`

const Button = ({
  children,
  handleClick,
  submitting = false,
  type,
  ...rest
}) => {
  const onClickInternal = () => {
    if (handleClick) {
      handleClick()
    }
  }

  return (
    <StyledButton
      type={type || 'button'}
      onClick={onClickInternal}
      {...rest}
    >
      {submitting ? <Loader /> : children}
    </StyledButton>
  )
}

export default Button
