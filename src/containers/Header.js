import React, { Component } from "react";
import "../App.css";
import firebase from "../firebase.js";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";

class Header extends Component {
  signOut = () => {
    firebase.auth().signOut();
  };

  profile = () => {
    this.props.history.push("/profile");
  };

  render() {
    return (
      <>
        <Button onClick={this.profile} value="Profile" />
        <Button onClick={this.signOut} value="Sign Out" />
      </>
    );
  }
}

export default withRouter(Header);
