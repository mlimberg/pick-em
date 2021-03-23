import styled from 'styled-components'
import Flex from './Flex'

const Wrapper = styled(Flex)`
  padding: 16px;
`

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageWrapper
