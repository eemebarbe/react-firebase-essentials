import React, { useContext } from "react";
import firebase from "../firebase.js";
import { withRouter } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { OverlayContext } from "../contexts/overlayContext";
import styled from "styled-components";
import { metrics, colors, icons } from "../themes";

const MenuItem = styled.button`
  position: relative;
  display: block;
  background-color: transparent;
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

const HeaderWithRouter = props => {
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
    props.location.pathname !== path && props.history.push(path);
  };

  return (
    <>
      <MenuItem onClick={() => pushTo("/profile")}>PROFILE</MenuItem>
      <MenuItem onClick={() => pushTo("/dashboard")}>DASHBOARD</MenuItem>
      <MenuItem
        onClick={() => {
          "http://github.com/eemebarbe/react-firebase-essentials";
        }}>
        GITHUB
      </MenuItem>
      <MenuItem onClick={signOut}>SIGN OUT</MenuItem>
    </>
  );
};

export default withRouter(HeaderWithRouter);
