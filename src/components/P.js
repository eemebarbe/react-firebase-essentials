import styled from "styled-components";
import { metrics } from "../themes";

const P = styled.div`
  margin-bottom: ${metrics.baseUnit * 3}px;
  line-height: 2;
  font-size: ${metrics.regularText}px;
  @media (max-width: 480px) {
    font-size: ${metrics.smallText}px;
  }
`;

export default P;
