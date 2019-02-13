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

const SpinnerOuter = styled.img`
  height: ${metrics.baseUnit * 1.5}px;
  width: ${metrics.baseUnit * 1.5}px;
  src: url(${props => props.src});
  animation: ${rotate} 1s linear infinite;
`;

const SpinnerInner = () => {
  return <SpinnerOuter src={icons.spinner} />;
};

export default SpinnerInner;
