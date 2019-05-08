import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Input,
  CenteredDiv,
  Message,
  P,
  Overlay,
  BodyWrapper
} from "../components";
import { UserContext } from "../contexts/userContext";
import firebase from "../firebase.js";
import "firebase/firestore";

const Confirmed = () => {
  const { userDispatch } = useContext(UserContext);
  const [newDevice, setNewDevice] = useState(false);
  const [firstAttempt, setFirstAttempt] = useState(true);
  const [email, setEmail] = useState(null);
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
        .then(result => {
          setTimeout(() => {
            window.close();
          }, 5000);
        })
        .catch(error => {
          setFirstAttempt(false);
        });
    }
  };

  const newDeviceCompletion = email => {
    if (email && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      userDispatch({
        type: "email",
        payload: {
          email: email
        }
      });
      finishConfirmation(email);
    }
  };

  const newDeviceCheck = () => {
    const firstAttemptText =
      "Looks like you opened the email we sent you on a different device than the one you signed up on! Enter your email address one more time to complete your verification.";
    const secondAttemptText =
      "It appears you've incorrectly entered your email address. Please try again.";
    return (
      <BodyWrapper>
        <P>{firstAttempt ? firstAttemptText : secondAttemptText}</P>
        <Input
          onChange={e => setEmail(e.target.value)}
          name="email"
          placeholder="Email address"
          autoComplete="email"
        />
        <Button onClick={() => newDeviceCompletion(email)}>CONFIRM</Button>
      </BodyWrapper>
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

export default Confirmed;
