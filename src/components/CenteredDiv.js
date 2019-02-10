import styled from "styled-components";
import metrics from "../themes/metrics";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: ${metrics.baseUnit * 2}px;
  color: lightgray;
`;

export default CenteredDiv;
