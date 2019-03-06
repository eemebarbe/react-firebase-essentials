import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const BodyOuter = styled.div`
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  padding-bottom: ${metrics.baseUnit * 4}px;
  position: absolute;
  width: ${metrics.bodyWidth}px;
  padding: 0px ${metrics.baseUnit * 2}px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BodyInner = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
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
