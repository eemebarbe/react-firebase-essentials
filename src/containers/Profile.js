import React, { useState, useContext } from "react";
import { Text, H1, Button, Input, Form } from "../components";
import { ToastContext } from "../contexts/toastContext";
import { UserContext } from "../contexts/userContext";
import firebase from "../firebase.js";
import "firebase/firestore";

const Profile = () => {
  const { userState } = useContext(UserContext);
  const [firstName, setFirstName] = useState(userState.firstName);
  const [lastName, setLastName] = useState(userState.lastName);
  const [loadState, setloadState] = useState(false);
  const { sendMessage } = useContext(ToastContext);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    if (firstName || lastName) {
      setloadState(true);
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
          firstName: firstName !== userState.firstName && firstName,
          lastName: lastName !== userState.lastName && lastName
        })
        .then(() => {
          setloadState(false);
          sendMessage("Update successful!");
        })
        .catch(err => {
          setloadState(false);
          sendMessage(err.message);
        });
    } else {
      sendMessage("You didn't enter any new profile information.");
    }
  };

  return (
    <>
      <H1>PROFILE</H1>
      <Text>Update your personal information here.</Text>
      <Form>
        <div>
          <Input
            onChange={e => setFirstName(e.target.value)}
            name="firstName"
            placeholder="First name"
            autoComplete="given-name"
            value={firstName}
          />
        </div>
        <div>
          <Input
            onChange={e => setLastName(e.target.value)}
            name="lastName"
            placeholder="Last name"
            autoComplete="family-name"
            value={lastName}
          />
        </div>
        <div>
          <Button loading={loadState} onClick={e => onClickSubmit(e)}>
            SUBMIT
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Profile;
