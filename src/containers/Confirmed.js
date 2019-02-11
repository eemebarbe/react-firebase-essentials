import React, { useState, useEffect } from "react";
import { Button, Input, CenteredDiv } from "../components";
import firebase from "../firebase.js";
import "firebase/firestore";

const Confirmed = () => {
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
          setTimeout(() => {
            window.close();
          }, 5000);
        })
        .catch(error => {
          console.log(error);
          setFirstAttempt(false);
        });
    }
  };

  const newDeviceCheck = () => {
    const firstAttemptText =
      "Looks like you opened the email we sent you on a different device than the one you signed up on! Enter your email address one more time to complete your verification.";
    const secondAttemptText =
      "It appears you've incorrectly entered your email address. Please try again.";
    return (
      <div>
        {firstAttempt ? firstAttemptText : secondAttemptText}
        <Input
          onChange={e => setEmail(e.target.value)}
          name="email"
          placeholder="Email address"
          autoComplete="email"
        />
        <Button onClick={() => finishConfirmation(email)}>Confirm</Button>
      </div>
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
      return (
        <CenteredDiv vertical horizontal>
          You are now confirmed! Navigate back to the app!
        </CenteredDiv>
      );
    }
  };

  return <>{confirmationCheck()}</>;
};

export default Confirmed;
