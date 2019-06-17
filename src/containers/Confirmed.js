import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button, CenteredDiv, Message, Overlay } from "../components";
import firebase from "../firebase.js";
import "firebase/firestore";

const Confirmed = props => {
  const [newDevice, setNewDevice] = useState(false);
  const [complete, setComplete] = useState(false);
  const db = firebase.firestore();

  useEffect(() => {
    let email = window.localStorage.getItem("confirmationEmail");
    if (!email) {
      setNewDevice(true);
    } else {
      finishConfirmation(email);
    }
  });

  const finishConfirmation = confirmedEmail => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      firebase
        .auth()
        .signInWithEmailLink(confirmedEmail, window.location.href)
        .then(result => {
          if (result.additionalUserInfo.isNewUser) {
            db.collection("users")
              .doc(result.user.uid)
              .set({
                email: confirmedEmail
              })
              .then(res => {
                setComplete(true);
              });
          }
          window.localStorage.removeItem("confirmationEmail");
          return;
        })
        .then(() => {
          setTimeout(() => {
            window.close();
          }, 5000);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const newDeviceCheck = () => {
    return (
      <CenteredDiv vertical horizontal>
        <Message>
          It appears that you're trying to verify your account from a different
          device or browser than the one you began with. Please complete the
          verification process from the same device/browser you started from.
        </Message>
        <Button
          marginTop
          onClick={() => {
            props.history.push("/signin");
          }}>
          Return To Sign In Page
        </Button>
      </CenteredDiv>
    );
  };

  const confirmed = () => {
    return (
      <CenteredDiv vertical horizontal>
        <Message>You are now confirmed! Navigate back to the app!</Message>
      </CenteredDiv>
    );
  };

  const confirmationCheck = () => {
    if (
      newDevice === true &&
      complete !== true &&
      !firebase.auth().currentUser
    ) {
      return newDeviceCheck();
    } else {
      return confirmed();
    }
  };

  return <Overlay visible={true}>{confirmationCheck()}</Overlay>;
};

export default withRouter(Confirmed);
