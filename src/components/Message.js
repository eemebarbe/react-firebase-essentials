import styled from "styled-components";
import { metrics, colors } from "../themes";

const Message = styled.div`
  font-size: ${metrics.baseUnit * 2.5}px;
  font-family: "Kollektif-Bold";
  color: ${colors.inactive};
`;

export default Message;
