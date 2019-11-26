import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Overlay, Hamburger } from "../components";
import MenuOverlay from "../containers/MenuOverlay";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import { metrics } from "../themes";

const Header = styled.div`
  transform: translateY(${props => "-" + props.scrollTop}px);
  z-index: 8;
  position: absolute;
  background-color: ${props => props.theme.background};
  width: 100%;
  height: ${metrics.headerHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.inactive};
  @media (max-width: 480px) {
    display: none;
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

const CompanyLogo = styled.button`
  color: ${props => props.theme.mainText};
  background-color: transparent;
  pointer-events: ${props => (props.samePath ? "none" : "initial")};
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  outline: 0;
  font-size: ${metrics.smallText}px;
`;

const HeaderWithRouter = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userState } = useContext(UserContext);
  const userId = userState.userId;
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const menuButtonState = () => {
    return menuOpen ? null : <Hamburger onClick={toggleMenu} />;
  };

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
      <Header {...props}>
        <HeaderInner>
          <CompanyLogo
            onClick={() => (userId ? pushTo("/dashboard") : pushTo("/"))}
          >
            React Firebase Essentials
          </CompanyLogo>
          {userId && menuButtonState()}
        </HeaderInner>
      </Header>
    </>
  );
};

export default withRouter(HeaderWithRouter);
