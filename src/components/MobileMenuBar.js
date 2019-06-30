import React, { useState } from "react";
import styled from "styled-components";
import { Overlay } from "../components";
import MenuOverlay from "../containers/MenuOverlay";
import { withRouter } from "react-router-dom";
import { metrics } from "../themes";

const Container = styled.div`
  display: none;
  z-index: 40;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.menuOpen ? props.theme.overlayBackground : props.theme.background};
  bottom: 0;
  position: absolute;
  border-top: 1px solid
    ${props =>
      props.menuOpen ? props.theme.overlayDetail : props.theme.inactive};
  height: ${metrics.mobileMenuHeight - 1}px;
  @media (max-width: 480px) {
    display: flex;
  }
`;

const MobileMenuBar = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = () => {
    return (
      <Overlay>
        <MenuOverlay setMenuOpen={() => setMenuOpen(false)} />
      </Overlay>
    );
  };

  return (
    <>
      {menuOpen && menu()}
      <Container menuOpen={menuOpen}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close Menu" : "Open Menu"}
        </div>
      </Container>
    </>
  );
};

export default withRouter(MobileMenuBar);
