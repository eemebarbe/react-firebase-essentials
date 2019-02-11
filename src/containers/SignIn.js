import React, { useState, useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Text from "../components/Text";
import H1 from "../components/H1";
import Form from "../components/Form";
import CenteredDiv from "../components/CenteredDiv";
import { ToastContext } from "../contexts/toastContext";
import ReCAPTCHA from "react-google-recaptcha";
import firebase from "../firebase.js";
import "firebase/functions";
import "firebase/firestore";

import styled from "styled-components";
import { metrics } from "../themes";

const ButtonWithMargin = styled(Button)`
  margin-right: ${metrics.baseUnit}px;
`;

const SignIn = () => {
  const [validCaptcha, setCaptcha] = useState(false);
  const [step, setStep] = useState("dataEntry");
  const [email, setEmail] = useState(email);
  const { sendMessage } = useContext(ToastContext);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    window.localStorage.setItem("confirmationEmail", email);
    const actionCodeSettings = {
      url: "http://" + process.env.REACT_APP_BASE_URL + "/#/confirmed",
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
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          console.log(error);
        } else {
          if (result.additionalUserInfo.isNewUser) {
            db.collection("users")
              .doc(result.user.uid)
              .set({
                email: result.additionalUserInfo.profile.email
              });
          }
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
      });
  };

  const dataEntry = () => {
    return (
      <>
        <H1>SIGN UP/SIGN IN</H1>
        <Text>Signing in and signing up are the same process.</Text>
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
          <ButtonWithMargin onClick={onClickSubmit}>SIGN IN</ButtonWithMargin>
          <ButtonWithMargin square onClick={authWithFacebook}>
            F
          </ButtonWithMargin>
          <Button square onClick={authWithFacebook}>
            G
          </Button>
        </Form>
      </>
    );
  };

  const verification = () => {
    return (
      <CenteredDiv vertical horizontal>
        Check your email!
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
