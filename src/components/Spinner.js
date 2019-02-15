import React from "react";
import styled, { keyframes } from "styled-components";
import { metrics, colors } from "../themes";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  margin: 0 auto;
  width: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5 + 4}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5 + 4}px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  border: 2px solid ${colors.detailText};
  opacity: 0.33;
  animation: ${rotate} 1s infinite ease-in-out;
  position: absolute;
`;

const Highlight = styled.div`
  border-radius: 50%;
  width: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 6 : metrics.baseUnit * 1.5}px;
  border: 2px solid rgb(0, 0, 0, 0);
  border-top: 2px solid ${colors.detailText};
  animation: ${rotate} 1s infinite ease-in-out;
  position: absolute;
`;

const SpinnerInner = props => {
  return (
    <SpinnerWrapper {...props}>
      <Circle {...props} />
      <Highlight {...props} />
    </SpinnerWrapper>
  );
};

export default SpinnerInner;
