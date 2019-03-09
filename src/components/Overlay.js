import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../themes";
import MenuOverlay from "../containers/MenuOverlay";
import { CenteredDiv, Message } from "../components";
import { OverlayContext } from "../contexts/overlayContext";

const Background = styled.div`
  position: absolute;
  z-index: 4;
  height: 100%;
  width: 100%;
  background-color: ${colors.inactive};
`;

const Overlay = () => {
  const { page } = useContext(OverlayContext);
  const getContent = () => {
    if (page === "menu") {
      return <MenuOverlay />;
    } else if (page === "checkEmail") {
      return (
        <CenteredDiv vertical horizontal>
          <Message>Check your email!</Message>
        </CenteredDiv>
      );
    } else if (page === "confirmed") {
    }
  };
  return <Background>{getContent()}</Background>;
};

export default Overlay;
