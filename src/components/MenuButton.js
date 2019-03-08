import React, { useContext } from "react";
import styled from "styled-components";
import { metrics, colors } from "../themes";
import { OverlayContext } from "../contexts/overlayContext";

const Container = styled.div`
  z-index: 6;
  position: absolute;
  width: 100%;
  height: ${metrics.baseUnit * 12}px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  @media (max-width: 480px) {
    display: none;
  }
  div {
    width: ${metrics.bodyWidth}px;
    padding: 0px ${metrics.bodyPadding}px;
    height: ${metrics.baseUnit * 5}px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      pointer-events: auto;
      display: inline-flex;
      padding: 0;
      background-color: ${colors.inactive};
      border-radius: ${metrics.baseUnit * 3}px;
      height: ${metrics.baseUnit * 5}px;
      width: ${metrics.baseUnit * 5}px;
      div {
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const MenuButton = () => {
  const { page, setPage } = useContext(OverlayContext);
  const toggleMenu = () => {
    page ? setPage(null) : setPage("menu");
  };

  return (
    <Container>
      <div>
        <div>
          <div onClick={toggleMenu}>MENU</div>
        </div>
      </div>
    </Container>
  );
};

export default MenuButton;
