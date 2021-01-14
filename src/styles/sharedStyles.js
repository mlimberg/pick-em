import { css } from 'styled-components'

export const margin = css`
  margin: ${props => props.margin || props.m};
  margin-left: ${props => props.ml || props.marginLeft || props.mx};
  margin-top: ${props => props.mt || props.marginTop || props.my};
  margin-right: ${props => props.mr || props.marginRight || props.mx};
  margin-bottom: ${props => props.mb || props.marginBottom || props.my};
`

export const padding = css`
  padding: ${props => props.padding || props.p};
  padding-left: ${props => props.pl || props.paddingLeft || props.px};
  padding-top: ${props => props.pt || props.paddingTop || props.py};
  padding-right: ${props => props.pr || props.paddingRight || props.px};
  padding-bottom: ${props => props.pb || props.paddingBottom || props.py};
`

export const absolutePositions = css`
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
`