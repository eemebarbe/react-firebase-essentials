import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import ReCAPTCHA from "react-google-recaptcha";
import firebase from "../firebase.js";
import "firebase/functions";
import "firebase/firestore";
import "../App.css";

const db = firebase.firestore();

class SignIn extends Component {
  state = {
    validCaptcha: false,
    step: "dataEntry",
    email: null,
    firstName: null,
    lastName: null,
    userType: null
  };

  onClickSubmit = () => {
    window.localStorage.setItem("userEmail", this.state.email);
    const actionCodeSettings = {
      url: "http://" + process.env.REACT_APP_BASE_URL + "/#/confirmed",
      handleCodeInApp: true
    };
    firebase
      .auth()
      .sendSignInLinkToEmail(this.state.email, actionCodeSettings)
      .then(() => {
        this.setState({ step: "pleaseCheckEmail" });
      })
      .catch(error => {
        console.log(error.message, error.code);
      });
  };

  authWithFacebook = () => {
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

  dataEntry = () => {
    return (
      <>
        SIGN UP
        <Button value="Facebook" onClick={this.authWithFacebook} />
        <form>
          {/*<Input
            onChange={e =>
              this.setState({
                firstName: e.target.value
              })
            }
            name="firstName"
            placeholder="First name"
            autoComplete="given-name"
          />
          <Input
            onChange={e =>
              this.setState({
                lastName: e.target.value
              })
            }
            name="lastName"
            placeholder="Last name"
            autoComplete="family-name"
          />*/}
          <Input
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
            name="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={this.captcha}
          />
          {/*<Input
            onChange={e =>
              this.setState({
                userType: e.target.value
              })
            }
            type="radio"
            name="userType"
            value="seller"
          />
          <div>Seller</div>
          <Input
            onChange={e =>
              this.setState({
                userType: e.target.value
              })
            }
            type="radio"
            name="userType"
            value="buyer"
          />
          <div>Buyer</div>*/}
        </form>
        <Button value="Sign Up" onClick={this.onClickSubmit} />
      </>
    );
  };

  verification = () => {
    return <>Check your email!</>;
  };

  captcha = value => {
    if (!value) {
      this.setState({
        validCaptcha: false
      });
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

  render() {
    const currentStep =
      this.state.step === "dataEntry" ? this.dataEntry() : this.verification();
    return currentStep;
  }
}

export default SignIn;
