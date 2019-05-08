import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const BodyOuter = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &.fade-appear,
  &.fade-enter {
    opacity: 0;
    z-index: 1;
    transform: translateX(24px);
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity ${metrics.animationLength}ms linear
        ${metrics.animationLength}ms,
      transform ${metrics.animationLength}ms ease-out
        ${metrics.animationLength}ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0px);
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateX(-24px);
    transition: opacity ${metrics.animationLength}ms linear,
      transform ${metrics.animationLength}ms ease-in;
  }
`;

const BodyWrapper = styled.div`
  padding: 0px ${metrics.bodyPadding}px;
  padding-top: ${metrics.headerHeight}px;
  width: ${metrics.bodyWidth}px;
  @media (max-width: 480px) {
    width: 100%;
    padding-top: 0px;
  }
`;

const BodyInner = styled.div`
  padding-bottom: ${metrics.baseUnit * 4}px;
  @media (max-width: 480px) {
    padding-bottom: ${metrics.baseUnit * 4}px;
  }
`;

const Wrapper = props => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <BodyOuter ref={scrollRef}>
      <BodyWrapper>
        <BodyInner>{props.children}</BodyInner>
      </BodyWrapper>
    </BodyOuter>
  );
};

export default Wrapper;
