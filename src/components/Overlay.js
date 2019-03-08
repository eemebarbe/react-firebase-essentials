import React, { useContext } from "react";
import styled from "styled-components";
import { metrics, colors } from "../themes";
import Header from "../containers/Header";
import { OverlayContext } from "../contexts/overlayContext";

const Background = styled.div`
  position: absolute;
  z-index: 4;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${colors.inactive};
  @media (max-width: 480px) {
    display: none;
  }
`;

const BackgroundInner = styled.div`
  padding: 0px ${metrics.bodyPadding}px;
  width: ${metrics.bodyWidth}px;
`;

const Overlay = () => {
  const { page } = useContext(OverlayContext);
  const getContent = () => {
    if (page === "menu") {
      return <Header />;
    } else if (page === "checkEmail") {
    } else if (page === "confirmed") {
    }
  };
  console.log(page);
  return (
    <Background>
      <BackgroundInner>{getContent()}</BackgroundInner>
    </Background>
  );
};

export default Overlay;
