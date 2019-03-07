import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const BodyOuter = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const BodyWrapper = styled.div`
  padding: 0px ${metrics.baseUnit * 2}px;
  width: ${metrics.bodyWidth}px;
  height: 100%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BodyInner = styled.div`
  padding-bottom: ${metrics.baseUnit * 4}px;
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
