import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.overlayBackground};
  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 75px);
    top: calc(50% - 75px);
    border-radius: 100%;
    width: 150px;
    height: 150px;
    box-shadow: 0px 0px 0px 2000px red;
  }
`;

const Overlay = props => {
  return <Background>{props.children}</Background>;
};

export default Overlay;
