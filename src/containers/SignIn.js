import React, { useState, useContext } from "react";
import {
  Text,
  H1,
  Button,
  FacebookAuth,
  GoogleAuth,
  Input,
  CenteredDiv,
  Form,
  Message
} from "../components";
import { ToastContext } from "../contexts/toastContext";
import ReCAPTCHA from "react-google-recaptcha";
import firebase from "../firebase.js";
import "firebase/functions";
import "firebase/firestore";

import styled from "styled-components";
import { metrics, colors } from "../themes";

const AuthSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${metrics.baseUnit}px;
  height: ${metrics.baseUnit * 1}px;
  width: ${metrics.baseUnit * 16}px;
  margin-bottom: ${metrics.baseUnit}px;
  color: ${colors.inactive};
  font-family: "Kollektif-Bold";
  span {
    margin: 0px ${metrics.baseUnit}px;
  }
`;

const SignIn = () => {
  const [validCaptcha, setCaptcha] = useState(false);
  const [facebookLoadState, setFacebookLoadState] = useState(false);
  const [step, setStep] = useState("dataEntry");
  const [email, setEmail] = useState("");
  const { sendMessage } = useContext(ToastContext);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    window.localStorage.setItem("confirmationEmail", email);
    const actionCodeSettings = {
      url: "http://" + process.env.REACT_APP_BASE_URL + "/confirmed",
      handleCodeInApp: true
    };
    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        setStep("pleaseCheckEmail");
      })
      .catch(error => {
        sendMessage(error.message);
      });
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

  const dataEntry = () => {
    return (
      <>
        <H1>SIGN UP/SIGN IN</H1>
        <Text>
          Signing in and signing up are the same process...hopefully you don't
          mind! Users typically don't log out of applications anyway, and I
          believe that verification by email feels more secure in the era of so
          many data breaches. I hope to have both options built in the future.
        </Text>
        <Form>
          <div>
            <Input
              onChange={e => setEmail(e.target.value)}
              name="email"
              placeholder="Email address"
              autoComplete="email"
            />
          </div>
          {/*
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={captcha}
          />
          */}
          <div>
            <Button marginBottom onClick={onClickSubmit}>
              SIGN IN WITH EMAIL
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
        <GoogleAuth marginBottom />
      </>
    );
  };

  const verification = () => {
    return (
      <CenteredDiv vertical horizontal>
        <Message>Check your email!</Message>
      </CenteredDiv>
    );
  };

  const captcha = value => {
    if (!value) {
      setCaptcha(false);
    } else {
      const checkRecaptcha = firebase
        .functions()
        .httpsCallable("checkRecaptcha");

      checkRecaptcha({ response: value })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

  const currentStep = step === "dataEntry" ? dataEntry() : verification();
  return currentStep;
};

export default SignIn;
