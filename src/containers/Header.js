import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { OverlayContext } from "../contexts/overlayContext";
import styled from "styled-components";
import { metrics, colors, icons } from "../themes";

const Header = styled.div`
  width: 100%;
  height: ${metrics.mobileHeaderHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.inactive};
  @media (max-width: 480px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  flex-direction: column;
  justify-content: center;

  height: ${metrics.mobileHeaderHeight / 3}px;
  width: ${metrics.mobileHeaderHeight / 3}px;
  div {
    flex-direction: column;
  }
  div :nth-child(1),
  div :nth-child(2) {
    margin-bottom: ${metrics.baseUnit * 1 - 2}px;
  }
  span {
    width: 100%;
    height: 0;
    border-top: 1px solid ${colors.maintext};
  }
`;

const HeaderInner = styled.div`
  width: ${metrics.bodyWidth}px;
  padding: 0px ${metrics.baseUnit * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: inline-flex;
  }
`;

const MenuButton = styled.div`
  margin-right: ${metrics.baseUnit};
  z-index: 6;
`;

const HeaderWithRouter = props => {
  const { page, setPage } = useContext(OverlayContext);
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const toggleMenu = () => {
    page ? setPage(null) : setPage("menu");
  };

  return (
    <Header>
      <HeaderInner>
        <div onClick={() => pushTo("/dashboard")}>
          REACT-FIREBASE-ESSENTIALS
        </div>
        <MenuButton onClick={toggleMenu}>
          <Hamburger>
            <div>
              <span />
              <span />
              <span />
            </div>
          </Hamburger>
        </MenuButton>
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
