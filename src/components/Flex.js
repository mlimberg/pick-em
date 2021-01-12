import styled from "styled-components";
import Box from "./Box";

const Flex = styled(Box)`
  display: ${props => props.display || "flex"};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  align-self: ${props => props.alignSelf};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  flex: ${props => props.flex};
  flex-grow: ${props => props.flexGrow};
`;

export default Flex;
