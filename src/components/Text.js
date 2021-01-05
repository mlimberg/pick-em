import styled from "styled-components";

const Text = styled('p')`
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.colors[props.color]};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration || "none"};
  text-align: ${props => props.textAlign};
  border: ${props => props.border};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-left: ${props => props.borderLeft};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  margin: ${props => props.m || props.margin};
  margin-left: ${props => props.ml || props.marginLeft || props.mx};
  margin-top: ${props => props.mt || props.marginTop || props.my};
  margin-right: ${props => props.mr || props.marginRight || props.mx};
  margin-bottom: ${props => props.mb || props.marginBottom || props.my};
  padding: ${props => props.p || props.padding};
  padding-left: ${props => props.p || props.pl || props.paddingLeft || props.px};
  padding-top: ${props => props.p || props.pt || props.paddingTop || props.py};
  padding-right: ${props => props.p || props.pr || props.paddingRight || props.px};
  padding-bottom: ${props => props.p || props.pb || props.paddingBottom || props.py};
  white-space: ${props => props.whiteSpace};
`;

export default Text;
