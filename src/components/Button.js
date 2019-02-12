import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Button = styled.button`
  height: ${metrics.baseUnit * 3}px;
  width: ${props =>
    props.square ? metrics.baseUnit * 3 + "px" : metrics.baseUnit * 8 + "px"};
  background-color: ${props => props.color || "blue"};
  color: white;
  border: 0;
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: ${metrics.baseUnit}px;
  cursor: pointer;
  outline: inherit;
  font-family: "Kollektif-Bold";
`;

const ButtonWithLoadState = props => {
  const loadState = () => {
    if (props.loadState === "loading") {
      return "LOADING";
    } else {
      return props.children;
    }
  };
  return <Button {...props}>{loadState()}</Button>;
};

export default ButtonWithLoadState;
