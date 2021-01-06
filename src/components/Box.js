import styled from "styled-components";

const Box = styled("div")`
  display: ${props => props.display || "block"};
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
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  background-color: ${props => props.theme.colors[props.backgroundColor]};
  margin: ${props => props.margin || props.m};
  margin-left: ${props => props.ml || props.marginLeft || props.mx};
  margin-top: ${props => props.mt || props.marginTop || props.my};
  margin-right: ${props => props.mr || props.marginRight || props.mx};
  margin-bottom: ${props => props.mb || props.marginBottom || props.my};
  padding: ${props => props.padding || props.p};
  padding-left: ${props => props.pl || props.paddingLeft || props.px};
  padding-top: ${props => props.pt || props.paddingTop || props.py};
  padding-right: ${props => props.pr || props.paddingRight || props.px};
  padding-bottom: ${props => props.pb || props.paddingBottom || props.py};
`;

export default Box;
