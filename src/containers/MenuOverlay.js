import React, { useContext } from "react";
import firebase from "../firebase.js";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UserContext } from "../contexts/userContext";
import { OverlayContext } from "../contexts/overlayContext";
import { Switch } from "../components";
import styled from "styled-components";
import { metrics } from "../themes";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Header = styled.div`
  width: 100%;
  height: ${metrics.mobileHeaderHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.overlayDetail};
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
  outline: none;
  padding: 0;
  font-size: 4rem;
  line-height: 1.5;
  top: 2px;
  cursor: pointer;
  outline: 0;
  font-family: "Kollektif-Bold";
  &.fade-appear,
  &.fade-enter {
    opacity: 0;
    z-index: 1;
    transform: translateY(24px);
    -webkit-transform: translateY(24px);
    -moz-transform: translateY(24px);
    -ms-transform: translateY(24px);
    -o-transform: translateY(24px);
  }
  &.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    -webkit-transition: opacity 400ms linear 400ms,
      transform 400ms ease-out 400ms;
    -moz-transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    -o-transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    transition-delay: ${props => props.child * 0.2}s;
  }
`;

const MenuOverlay = props => {
  const { userState, userDispatch } = useContext(UserContext);
  const { setOverlay } = useContext(OverlayContext);
  const signOut = () => {
    window.localStorage.removeItem("userData");
    setOverlay(null);
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
  };

  const pushTo = path => {
    setOverlay(null);
    !samePath(path) && props.history.push(path);
  };

  const samePath = path => {
    return props.location.pathname === path;
  };

  const toggleStyles = () => {
    userDispatch({
      type: "styleMode",
      payload: userState.styleMode === "main" ? "dark" : "main"
    });
  };
  return (
    <>
      <Header>
        <HeaderInner>
          <Switch
            checked={userState.styleMode === "dark"}
            onChange={toggleStyles}
          />
        </HeaderInner>
      </Header>
      <Container>
        <BackgroundInner>
          <TransitionGroup appear>
            <CSSTransition child={0} timeout={1000} classNames="fade">
              <MenuItem
                samePath={samePath("/dashboard")}
                onClick={() => pushTo("/dashboard")}>
                DASHBOARD
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={1} timeout={1000} classNames="fade">
              <MenuItem
                samePath={samePath("/profile")}
                onClick={() => pushTo("/profile")}>
                PROFILE
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={2} timeout={1000} classNames="fade">
              <MenuItem
                onClick={() => {
                  window.location.href =
                    "http://github.com/eemebarbe/react-firebase-essentials";
                }}>
                GITHUB
              </MenuItem>
            </CSSTransition>
            <CSSTransition child={3} timeout={1000} classNames="fade">
              <MenuItem onClick={signOut}>SIGN OUT</MenuItem>
            </CSSTransition>
          </TransitionGroup>
        </BackgroundInner>
      </Container>
    </>
  );
};

export default withRouter(MenuOverlay);
