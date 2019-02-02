import React from "react";
import "../App.css";
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
      <Button onClick={profile} value="Profile" />
      <Button onClick={signOut} value="Sign Out" />
    </>
  );
};

export default withRouter(Header);
