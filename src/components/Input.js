import styled from "styled-components";
import { metrics, colors } from "../themes";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  margin: none;
  margin-bottom: ${metrics.baseUnit}px;
  font-family: inherit;
  padding: 0;
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 16}px;
  font-size: ${metrics.baseUnit * 1.5}px;
  input&::placeholder {
    color: ${colors.lightgray};
  }
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

export default Input;
