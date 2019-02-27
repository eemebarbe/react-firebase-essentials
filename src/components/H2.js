import styled from "styled-components";
import { metrics } from "../themes";

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${metrics.baseUnit * 2}px;
  font-family: "Kollektif-Bold";
  position: relative;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export default H2;
