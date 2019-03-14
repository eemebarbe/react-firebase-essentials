import styled from "styled-components";
import { metrics } from "../themes";

const Message = styled.div`
  font-size: 2.5rem;
  font-family: "Kollektif-Bold";
  color: ${props => props.theme.overlayDetail};
  padding: 0px ${metrics.bodyPadding}px;
`;

export default Message;
