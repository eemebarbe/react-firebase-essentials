import React from "react";
import styled, { keyframes } from "styled-components";
import { metrics, icons } from "../themes";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerOuter = styled.div`
  border-radius: 50%;
  width: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  border-top-color: rgb(255, 255, 255);
  animation: ${rotate} 1s infinite ease-in;
  margin: 0 auto;
`;

const SpinnerInner = props => {
  return <SpinnerOuter src={icons.spinner} {...props} />;
};

export default SpinnerInner;
