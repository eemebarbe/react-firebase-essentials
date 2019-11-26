import React, { useState, useContext } from "react";
import {
  P,
  H1,
  Button,
  FacebookAuth,
  GoogleAuth,
  Input,
  Form,
  Overlay,
  CenteredDiv,
  Message,
  BodyWrapper
} from "../components";
import { ToastContext } from "../contexts/toastContext";
import { UserContext } from "../contexts/userContext";
import firebase from "../firebase.js";
import "firebase/functions";
import "firebase/firestore";
import styled from "styled-components";
import { metrics } from "../themes";

const AuthSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${metrics.smallText}px;
  height: ${metrics.baseUnit * 2}px;
  width: ${metrics.baseUnit * 20}px;
  margin-bottom: ${metrics.baseUnit}px;
  color: ${props => props.theme.inactive};
  font-weight: 700;
  span {
    margin: 0px ${metrics.baseUnit}px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SignIn = () => {
  const [facebookLoadState, setFacebookLoadState] = useState(false);
  const [googleLoadState, setGoogleLoadState] = useState(false);
  const [email, setEmail] = useState("");
  const { sendMessage } = useContext(ToastContext);
  const { userState, userDispatch } = useContext(UserContext);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    if (email && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      window.localStorage.setItem("confirmationEmail", email);
      const actionCodeSettings = {
        url: "http://" + process.env.REACT_APP_BASE_URL + "/confirmed",
        handleCodeInApp: true
      };
      firebase
        .auth()
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          userDispatch({
            type: "verifying",
            payload: {
              verifying: true
            }
          });
        })
        .catch(error => {
          sendMessage(error.message);
        });
    } else {
      sendMessage("Please enter a valid email address.");
    }
  };

  const authWithFacebook = () => {
    setFacebookLoadState(true);
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(result => {
        if (result.additionalUserInfo.isNewUser) {
          db.collection("users")
            .doc(result.user.uid)
            .set({
              email: result.additionalUserInfo.profile.email
            });
        }
      })
      .catch(err => {
        if (err.code === "auth/account-exists-with-different-credential") {
          sendMessage(
            "It looks like the email address associated with your Facebook account has already been used to sign in with another method. Please sign in using the original method you signed up with."
          );
        } else {
          sendMessage(err.message);
        }
        setFacebookLoadState(false);
      });
  };

  const authWithGoogle = () => {
    setGoogleLoadState(true);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        if (result.additionalUserInfo.isNewUser) {
          db.collection("users")
            .doc(result.user.uid)
            .set({
              email: result.additionalUserInfo.profile.email
            });
        }
      })
      .catch(err => {
        if (err.code === "auth/account-exists-with-different-credential") {
          sendMessage(
            "It looks like the email address associated with your Facebook account has already been used to sign in with another method. Please sign in using the original method you signed up with."
          );
        } else {
          sendMessage(err.message);
        }
        setGoogleLoadState(false);
      });
  };

  const overlay = () => {
    return (
      <Overlay>
        <CenteredDiv vertical horizontal>
          <Message>
            Please open the email we sent you, so we can verify your account!
          </Message>
        </CenteredDiv>
      </Overlay>
    );
  };

  return (
    <>
      {userState.verifying && overlay()}
      <BodyWrapper>
        <H1>Sign Up/Sign In</H1>
        <P>
          Signing in and signing up are the same process, and no password is
          asked for...hopefully you don't mind! I believe that verification by
          email is better for consumer trust in the era of so many data
          breaches, and is arguably safer than a traditional authentication
          setup.
        </P>
        <Form>
          <div>
            <Input
              onChange={e => setEmail(e.target.value)}
              name="email"
              placeholder="Email address"
              autoComplete="email"
            />
          </div>
          <div>
            <Button marginBottom onClick={onClickSubmit}>
              Sign in with Email
            </Button>
          </div>
        </Form>
        <AuthSeparator>
          <span>OR</span>
        </AuthSeparator>
        <FacebookAuth
          marginBottom
          loading={facebookLoadState}
          onClick={authWithFacebook}
        />
        <GoogleAuth loading={googleLoadState} onClick={authWithGoogle} />
      </BodyWrapper>
    </>
  );
};

export default SignIn;
