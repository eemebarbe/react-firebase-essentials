import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import ReCAPTCHA from "react-google-recaptcha";
import firebase from "../firebase.js";
import "firebase/functions";
import "firebase/firestore";
import "../App.css";

const db = firebase.firestore();

const SignIn = () => {
  const [validCaptcha, setCaptcha] = useState(false);
  const [step, setStep] = useState("dataEntry");
  const [email, setEmail] = useState(email);

  const onClickSubmit = () => {
    window.localStorage.setItem("userEmail", email);
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
        console.log(error.message, error.code);
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
        console.log(err);
      });
  };

  const dataEntry = () => {
    return (
      <>
        SIGN UP/SIGN IN
        <Button value="Facebook" onClick={authWithFacebook} />
        <form>
          <Input
            onChange={e => setEmail(e.target.value)}
            name="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={captcha}
          />
        </form>
        <Button value="Sign Up" onClick={onClickSubmit} />
      </>
    );
  };

  const verification = () => {
    return <>Check your email!</>;
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
