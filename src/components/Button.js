import styled from "styled-components";
import metrics from "../themes/metrics";

const Button = styled.button`
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 9}px;
  background-color: blue;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  font-size: ${metrics.baseUnit}px;
  cursor: pointer;
  outline: inherit;
`;

export default Button;
