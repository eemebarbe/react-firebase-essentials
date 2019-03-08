import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const BodyOuter = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  overflow: hidden;
  &.fade-appear,
  &.fade-enter {
    opacity: 0;
    z-index: 1;
    transform: translateX(24px);
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateX(-24px);
    transition: opacity 400ms linear, transform 400ms ease-in;
  }
`;

const BodyWrapper = styled.div`
  padding: 0px ${metrics.bodyPadding}px;
  width: ${metrics.bodyWidth}px;
  height: 100%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BodyInner = styled.div`
  padding-bottom: ${metrics.baseUnit * 4}px;
  @media (max-width: 480px) {
    padding-bottom: ${metrics.baseUnit * 4 + metrics.mobileMenuHeight}px;
  }
`;

const Wrapper = props => {
  return (
    <BodyOuter>
      <BodyWrapper>
        <BodyInner>{props.children}</BodyInner>
      </BodyWrapper>
    </BodyOuter>
  );
};

export default Wrapper;
