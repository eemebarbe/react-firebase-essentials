import styled from "styled-components";
import { metrics } from "../themes";

const Message = styled.div`
  position: relative;
  z-index: 42;
  font-size: 2.5rem;
  font-family: "Kollektif-Bold";
  color: ${props => props.theme.overlayDetail};
  padding: ${metrics.bodyPadding}px;
`;

export default Message;
