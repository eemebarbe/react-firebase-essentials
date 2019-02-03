import React from "react";
import firebase from "../firebase.js";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";

const Header = props => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  const profile = () => {
    props.history.push("/profile");
  };

  return (
    <>
      <Button onClick={profile}>Profile</Button>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  );
};

export default withRouter(Header);
