import React, { useContext } from "react";
import firebase from "../firebase.js";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UserContext } from "../contexts/userContext";
import { Switch, Close } from "../components";
import styled from "styled-components";
import { metrics } from "../themes";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    align-items: center;
  }
`;

const MenuHeader = styled.div`
  width: 100%;
  height: ${metrics.headerHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.overlayDetail};
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

const BackgroundInner = styled.div`
  padding: 0px ${metrics.bodyPadding}px;
  width: ${metrics.bodyWidth}px;
  @media (max-width: 480px) {
    margin-bottom: ${metrics.mobileMenuHeight}px;
  }
`;

const MenuItem = styled.button`
  position: relative;
  display: block;
  background-color: transparent;
  color: ${props => (props.samePath ? props.theme.overlayDetail : "inherit")};
  pointer-events: ${props => (props.samePath ? "none" : "initial")};
  border: 0;
  margin-top: ${metrics.baseUnit * 3}px;
  height: ${metrics.baseUnit * 6}px;
  width: 100%;
  text-align: left;
  outline: none;
  padding: 0;
  font-size: ${metrics.H1}px;
  line-height: 1.5;
  top: 2px;
  cursor: pointer;
  outline: 0;
  font-weight: 700;
  &:last-child {
    display: none;
  }
  @media (max-width: 480px) {
    font-size: ${metrics.H2}px;
    margin-top: 0;
    line-height: ${metrics.baseUnit * 3}px;
    height: 1;
    text-align: center;
    &:last-child {
      display: initial;
    }
  }
  &.fade-appear,
  &.fade-enter {
    opacity: 0;
    transform: translateY(24px);
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    transition-delay: ${props => props.child * 0.2}s;
  }
  &.switch-appear,
  &.switch-enter {
    opacity: 0;
  }
  &.switch-appear-active,
  &.switch-enter.switch-enter-active {
    opacity: 1;
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    transition-delay: ${props => props.child * 0.2}s;
  }
`;

const MenuOverlay = props => {
  const { userDispatch } = useContext(UserContext);
  const styleMode = window.localStorage.getItem("styleMode");

  const signOut = () => {
    props.setMenuOpen();
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
  };

  const pushTo = path => {
    props.setMenuOpen();
    !samePath(path) && props.history.push(path);
  };

  const samePath = path => {
    return props.location.pathname === path;
  };

  const toggleStyles = () => {
    const newStyle = styleMode === "main" ? "dark" : "main";
    userDispatch({
      type: "styleMode",
      payload: newStyle
    });
    window.localStorage.setItem("styleMode", newStyle);
  };

  return (
    <>
      <MenuHeader>
        <HeaderInner>
          <Switch checked={styleMode === "dark"} onChange={toggleStyles} />
          <Close onClick={() => props.setMenuOpen()} />
        </HeaderInner>
      </MenuHeader>
      <Container>
        <BackgroundInner>
          <TransitionGroup appear>
            <CSSTransition child={0} timeout={1000} classNames="fade">
              <MenuItem
                samePath={samePath("/dashboard")}
                onClick={() => pushTo("/dashboard")}
              >
                Dashboard
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={1} timeout={1000} classNames="fade">
              <MenuItem
                samePath={samePath("/profile")}
                onClick={() => pushTo("/profile")}
              >
                Profile
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={2} timeout={1000} classNames="fade">
              <MenuItem
                onClick={() => {
                  window.location.href =
                    "http://github.com/eemebarbe/react-firebase-essentials";
                }}
              >
                Github
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={3} timeout={1000} classNames="fade">
              <MenuItem onClick={signOut}>Sign out</MenuItem>
            </CSSTransition>
            <MenuItem>
              <Switch checked={styleMode === "dark"} onChange={toggleStyles} />
            </MenuItem>
          </TransitionGroup>
        </BackgroundInner>
      </Container>
    </>
  );
};

export default withRouter(MenuOverlay);
