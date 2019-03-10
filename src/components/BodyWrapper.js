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
    -webkit-transform: translateX(24px);
    -moz-transform: translateX(24px);
    -ms-transform: translateX(24px);
    -o-transform: translateX(24px);
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    -webkit-transition: opacity 400ms linear 400ms,
      transform 400ms ease-out 400ms;
    -moz-transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    -o-transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateX(-24px);
    -webkit-transform: translateX(-24px);
    -moz-transform: translateX(-24px);
    -ms-transform: translateX(-24px);
    -o-transform: translateX(-24px);
    transition: opacity 400ms linear, transform 400ms ease-in;
    -webkit-transition: opacity 400ms linear, transform 400ms ease-in;
    -moz-transition: opacity 400ms linear, transform 400ms ease-in;
    -o-transition: opacity 400ms linear, transform 400ms ease-in;
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
