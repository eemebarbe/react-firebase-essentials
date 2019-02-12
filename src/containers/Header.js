import React, { useContext } from "react";
import firebase from "../firebase.js";
import { Button } from "../components";
import { withRouter } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import { metrics, colors } from "../themes";

const Header = styled.div`
  width: 100%;
  height: ${metrics.baseUnit * 5}px;
  background-color: ${colors.inactive};
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
  const { userDispatch } = useContext(UserContext);
  const signOut = () => {
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
    window.localStorage.removeItem("userData");
  };

  const profile = () => {
    props.history.push("/profile");
  };

  return (
    <Header>
      <HeaderInner>
        <div>
          <ButtonWithMargin onClick={profile}>PROFILE</ButtonWithMargin>
          <Button onClick={signOut}>SIGN OUT</Button>
        </div>
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
