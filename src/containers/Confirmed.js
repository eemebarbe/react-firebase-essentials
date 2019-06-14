import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Input,
  CenteredDiv,
  Message,
  P,
  H1,
  Overlay,
  BodyWrapper
} from "../components";
import { UserContext } from "../contexts/userContext";
import { ToastContext } from "../contexts/toastContext";
import firebase from "../firebase.js";
import "firebase/firestore";

const Confirmed = props => {
  const { userDispatch } = useContext(UserContext);
  const { sendMessage } = useContext(ToastContext);
  const [newDevice, setNewDevice] = useState(false);
  const [loadState, setloadState] = useState(false);
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
                setloadState(false);
              });
          } else {
            db.collection("users")
              .doc(result.user.uid)
              .get()
              .then(res => {
                if (res.data() && res.data().firstName) {
                  userDispatch(
                    { type: "additionalInfo", payload: res.data() },
                    { type: "verifying", payload: false },
                    { type: "userId", payload: result.user.uid }
                  );
                }
              });
          }
          window.localStorage.removeItem("confirmationEmail");
          return;
        })
        .then(result => {
          setloadState(false);
          if (newDevice) {
            props.history.push("/dashboard");
          } else {
            setComplete(true);
            /*setTimeout(() => {
              window.close();
            }, 5000);*/
          }
        })
        .catch(error => {
          setloadState(false);
          sendMessage(
            "It appears you've incorrectly entered your email address. Please try again."
          );
        });
    }
  };

  const newDeviceCompletion = email => {
    if (email && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setloadState(true);
      userDispatch({
        type: "email",
        payload: {
          email: email
        }
      });
      finishConfirmation(email);
    } else {
      sendMessage("Please enter a valid email address.");
    }
  };

  const newDeviceCheck = () => {
    return (
      <>
        <H1>OOPS!</H1>
        <P>
          Looks like you opened the email we sent you on a different device than
          the one you signed up on! Enter your email address one more time to
          complete your verification.
        </P>
        <Input
          onChange={e => setEmail(e.target.value)}
          name="email"
          placeholder="Email address"
          autoComplete="email"
        />
        <Button loading={loadState} onClick={() => newDeviceCompletion(email)}>
          CONFIRM
        </Button>
      </>
    );
  };

  const confirmed = () => {
    return (
      <Overlay>
        <CenteredDiv vertical horizontal>
          <Message>You are now confirmed! Navigate back to the app!</Message>
        </CenteredDiv>
      </Overlay>
    );
  };

  const confirmationCheck = () => {
    if (
      newDevice === true &&
      complete !== true &&
      !firebase.auth().currentUser
    ) {
      return newDeviceCheck();
    }
  };

  return (
    <>
      <BodyWrapper>{confirmationCheck()}</BodyWrapper>
      {complete && confirmed()}
    </>
  );
};

export default withRouter(Confirmed);
