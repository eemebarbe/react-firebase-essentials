import React from "react";
import styled from "styled-components";
import firebase from "../firebase.js";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";
import metrics from "../themes/metrics";

const Header = styled.div`
  width: 100%;
  height: ${metrics.baseUnit * 5}px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderInner = styled.div`
  width: ${metrics.bodyWidth}px;
  height: ${metrics.baseUnit * 5}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonWithMargin = styled(Button)`
  margin-right: ${metrics.baseUnit}px;
`;

const HeaderWithRouter = props => {
  const signOut = () => {
    firebase.auth().signOut();
    window.localStorage.removeItem("userData");
  };

  const profile = () => {
    props.history.push("/profile");
  };

  return (
    <Header>
      <HeaderInner>
        <ButtonWithMargin onClick={profile}>PROFILE</ButtonWithMargin>
        <Button onClick={signOut}>SIGN OUT</Button>
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
