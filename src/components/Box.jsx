import styled from 'styled-components'
import {
  margin,
  padding,
  absolutePositions,
} from '../styles/sharedStyles'

const Box = styled('div')`
  ${margin}
  ${padding}
  ${absolutePositions}
  display: ${props => props.display || 'block'};
  width: ${props => props.width};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  border: ${props => props.border};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-left: ${props => props.borderLeft};
  border-color: ${props => props.theme.colors[props.borderColor]};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.theme.colors[props.color]};
  background: ${props => props.background};
  position: ${props => props.position};

  background-color: ${props =>
    props.theme.colors[props.backgroundColor]};
`

export default Box
