import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: transparent;
  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 400px);
    top: calc(50% - 400px);
    border-radius: 100%;
    width: 800px;
    height: 800px;
    box-shadow: ${props => "0px 0px 0px 2000px darkblue"}};
  }
`;

const Overlay = props => {
  return <Background>{props.children}</Background>;
};

export default Overlay;
