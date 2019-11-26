import styled from "styled-components";
import { metrics } from "../themes";

const H2 = styled.h2`
  font-size: ${metrics.H2}px;
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${metrics.baseUnit * 2}px;
  font-weight: 700;
  position: relative;
  @media (max-width: 480px) {
    font-size: ${metrics.regularText}px;
  }
`;

export default H2;
