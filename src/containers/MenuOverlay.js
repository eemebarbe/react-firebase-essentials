import React, { useContext } from "react";
import firebase from "../firebase.js";
import { withRouter } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { OverlayContext } from "../contexts/overlayContext";
import styled from "styled-components";
import { metrics } from "../themes";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const MenuBar = styled.div`
  height: ${metrics.mobileHeaderHeight - 1}px;
  border-bottom: 1px solid darkgray;
`;

const BackgroundInner = styled.div`
  padding: 0px ${metrics.bodyPadding}px;
  width: ${metrics.bodyWidth}px;
`;

const MenuItem = styled.button`
  position: relative;
  display: block;
  background-color: transparent;
  color: ${props => (props.samePath ? "darkgray" : "inherit")};
  pointer-events: ${props => (props.samePath ? "none" : "initial")};
  border: 0;
  height: ${metrics.baseUnit * 12}px;
  outline: none;
  padding: 0;
  font-size: 4rem;
  line-height: 1.5;
  top: 2px;
  cursor: pointer;
  outline: 0;
  font-family: "Kollektif-Bold";
`;

const MenuOverlay = props => {
  const { userDispatch } = useContext(UserContext);
  const { setPage } = useContext(OverlayContext);
  const signOut = () => {
    setPage(null);
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
    window.localStorage.removeItem("userData");
  };

  const pushTo = path => {
    setPage(null);
    !samePath(path) && props.history.push(path);
  };

  const samePath = path => {
    return props.location.pathname === path;
  };

  return (
    <>
      <MenuBar />
      <Container>
        <BackgroundInner>
          <MenuItem
            samePath={samePath("/dashboard")}
            onClick={() => pushTo("/dashboard")}>
            DASHBOARD
          </MenuItem>
          <MenuItem
            samePath={samePath("/profile")}
            onClick={() => pushTo("/profile")}>
            PROFILE
          </MenuItem>
          <MenuItem
            onClick={() => {
              "http://github.com/eemebarbe/react-firebase-essentials";
            }}>
            GITHUB
          </MenuItem>
          <MenuItem onClick={signOut}>SIGN OUT</MenuItem>
        </BackgroundInner>
      </Container>
    </>
  );
};

export default withRouter(MenuOverlay);
