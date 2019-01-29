import React, { Component } from "react";
import "../App.css";
import Input from "../components/Input";
import Button from "../components/Button";
import firebase from "../firebase.js";
import "firebase/firestore";
const db = firebase.firestore();

class Confirmed extends Component {
  state = {
    newDevice: false,
    firstAttempt: true,
    email: null,
    complete: false
  };

  componentDidMount() {
    let email = window.localStorage.getItem("userEmail");
    if (!email) {
      this.setState({
        newDevice: true
      });
    } else {
      this.finishConfirmation(email);
    }
  }

  finishConfirmation = email => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(result => {
          if (result.additionalUserInfo.isNewUser) {
            db.collection("users")
              .doc(result.user.uid)
              .set({
                email: email
              })
              .then(res => {
                this.setState({
                  complete: true
                });
              });
          }
          window.localStorage.removeItem("userEmail");
          setTimeout(() => {
            window.close();
          }, 5000);
        })
        .catch(error => {
          console.log(error);
          this.setState({
            firstAttempt: false
          });
        });
    }
  };

  newDevice = () => {
    const firstAttempt =
      "Looks like you opened the email we sent you on a different device than the one you signed up on! Enter your email address one more time to complete your verification.";
    const secondAttempt =
      "It appears you've incorrectly entered your email address. Please try again.";
    return (
      <div>
        {this.state.firstAttempt ? firstAttempt : secondAttempt}
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
        <Button
          value="Confirm"
          onClick={() => this.finishConfirmation(this.state.email)}
        />
      </div>
    );
  };

  confirmationCheck = () => {
    if (
      this.state.newDevice === true &&
      this.state.complete !== true &&
      !firebase.auth().currentUser
    ) {
      return this.newDevice();
    } else {
      return <>You are now confirmed! Navigate back to the app!</>;
    }
  };

  render() {
    return <>{this.confirmationCheck()}</>;
  }
}

export default Confirmed;
