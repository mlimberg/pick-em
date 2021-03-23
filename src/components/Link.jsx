import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${p => p.color || 'inherit'};
  width: ${p => p.width || 'inherit'};
  text-decoration: none;
`

export default StyledLink
