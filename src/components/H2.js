import styled from "styled-components";
import { metrics } from "../themes";

const H2 = styled.h2`
  font-size: ${metrics.baseUnit * 2}px;
  line-height: 1;
  margin: 0;
  margin-bottom: ${metrics.baseUnit * 2}px;
  font-family: "Kollektif-Bold";
  position: relative;
`;

export default H2;
