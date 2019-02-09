import React from "react";
import styled from "styled-components";
import firebase from "../firebase.js";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  background-color: lightgray;
`;

const HeaderWithRouter = props => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  const profile = () => {
    props.history.push("/profile");
  };

  return (
    <Header>
      <Button onClick={profile}>Profile</Button>
      <Button onClick={signOut}>Sign Out</Button>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
