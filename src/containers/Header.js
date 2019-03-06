import React, { useContext } from "react";
import firebase from "../firebase.js";
import { Button, Icon } from "../components";
import { withRouter } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import { metrics, colors, icons } from "../themes";

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
  padding: 0px ${metrics.baseUnit * 2}px;
  height: ${metrics.baseUnit * 5}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: inline-flex;
  }
`;

const ButtonWithMargin = styled(Button)`
  margin-right: ${metrics.baseUnit}px;
`;

const HeaderWithRouter = props => {
  const { userState, userDispatch } = useContext(UserContext);
  const userId = userState.userId;
  const signOut = () => {
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
    window.localStorage.removeItem("userData");
  };

  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const userMenu = () => {
    return (
      <div>
        <ButtonWithMargin onClick={() => pushTo("/profile")}>
          PROFILE
        </ButtonWithMargin>
        <Button onClick={signOut}>SIGN OUT</Button>
      </div>
    );
  };

  return (
    <Header>
      <HeaderInner>
        <div>
          <Icon marginRight onClick={() => pushTo("/")} src={icons.home} />
          <Icon
            linkTo={"http://github.com/eemebarbe/react-firebase-essentials"}
            src={icons.github}
          />
        </div>
        {userId && userMenu()}
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
