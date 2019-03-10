import styled from "styled-components";
import { metrics, colors } from "../themes";

const Message = styled.div`
  font-size: 2.5rem;
  font-family: "Kollektif-Bold";
  color: ${colors.maintext};
  padding: 0px ${metrics.bodyPadding}px;
`;

export default Message;
