import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 6px solid ${p => p.theme.colors.gray};
  border-top: 6px solid ${p => p.theme.colors.primary};
  border-radius: 50%;
  width: ${p => p.size || '20px'};
  height: ${p => p.size || '20px'};
  animation: ${spin} 1s ease-in infinite;
`

export default Loader
