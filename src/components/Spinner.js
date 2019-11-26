import React from "react";
import styled, { keyframes } from "styled-components";
import { metrics } from "../themes";

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
    props.large ? metrics.baseUnit * 8 + 6 : metrics.baseUnit * 1.5}px;
  height: ${props =>
    props.large ? metrics.baseUnit * 8 + 6 : metrics.baseUnit * 1.5}px;
  position: absolute;
`;

const Circle = styled(SpinnerTemplate)`
  border: 3px solid
    ${props =>
      (props.secondary && props.theme.inactive) || props.theme.detailText};
  opacity: 0.33;
  visibility: visible;
`;

const Highlight = styled(SpinnerTemplate)`
  border: 3px solid rgba(0, 0, 0, 0);
  border-top: 3px solid
    ${props =>
      (props.secondary && props.theme.inactive) || props.theme.detailText};
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
