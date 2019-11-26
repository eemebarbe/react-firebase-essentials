import styled from "styled-components";
import { metrics } from "../themes";

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.mainText};
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${props => props.theme.inactive};
  outline: none;
  margin: none;
  margin-bottom: ${metrics.baseUnit}px;
  padding: 0;
  height: ${metrics.baseUnit * 3 - 1}px;
  width: ${metrics.baseUnit * 16}px;
  font-size: 1.5rem;
  &::placeholder {
    color: ${props => props.theme.inactive};
  }
  &:focus {
    border-bottom: 1px solid ${props => props.theme.mainText};
  }
  box-sizing: content-box;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Input;
