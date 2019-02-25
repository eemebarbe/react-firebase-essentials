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

const SpinnerTemplate = styled.div`
  border-radius: 50%;
  width: ${props =>
    props.large ? metrics.baseUnit * 6 + 4 : metrics.baseUnit * 1.5}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 6 + 4 : metrics.baseUnit * 1.5}px;
  position: absolute;
`;

const Circle = styled(SpinnerTemplate)`
  border: 2px solid ${colors.detailText};
  opacity: 0.33;
  visibility: visible;
`;

const Highlight = styled(SpinnerTemplate)`
  border: 2px solid rgb(0, 0, 0, 0);
  border-top: 2px solid ${colors.detailText};
  animation: ${rotate} 1s infinite ease-in-out;
`;

const Spinner = props => {
  return (
    <>
      <Circle {...props} />
      <Highlight {...props} />
    </>
  );
};

export default Spinner;
