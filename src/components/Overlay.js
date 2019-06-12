import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.overlayBackground};
`;

const Overlay = props => {
  return <Background>{props.children}</Background>;
};

export default Overlay;
