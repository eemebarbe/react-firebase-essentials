import React, { useContext } from "react";
import styled from "styled-components";
import MenuOverlay from "../containers/MenuOverlay";
import { CenteredDiv, Message } from "../components";
import { OverlayContext } from "../contexts/overlayContext";

const Background = styled.div`
  position: absolute;
  z-index: 4;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.overlayBackground};
`;

const Overlay = () => {
  const { page } = useContext(OverlayContext);
  const getContent = () => {
    if (page === "menu") {
      return <MenuOverlay />;
    } else if (page === "checkEmail") {
      return (
        <CenteredDiv vertical horizontal>
          <Message>
            Please open the email we sent you, so we can verify your account!
          </Message>
        </CenteredDiv>
      );
    } else if (page === "confirmed") {
    }
  };
  return <Background>{getContent()}</Background>;
};

export default Overlay;
