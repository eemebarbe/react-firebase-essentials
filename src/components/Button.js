import styled from "styled-components";
import { metrics } from "../themes";

const Button = styled.button`
  height: ${metrics.baseUnit * 3}px;
  width: ${props =>
    props.square ? metrics.baseUnit * 3 + "px" : metrics.baseUnit * 8 + "px"};
  background-color: ${props => props.color || "blue"};
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  font-size: ${metrics.baseUnit}px;
  cursor: pointer;
  outline: inherit;
`;

export default Button;
