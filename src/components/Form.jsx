import styled from 'styled-components'
import Flex from './Flex'

const StyledForm = styled.form`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: 16px;
`

const Form = ({ children, handleSubmit, ...rest }) => {
  const onSubmit = e => {
    e.preventDefault()
    console.log('hit hit hit')

    if (handleSubmit) {
      handleSubmit()
    }
  }

  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  )
}

export default Form
