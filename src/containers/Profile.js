import React, { useState } from "react";
import { Text, H1, Button, Input, Form } from "../components";
import firebase from "../firebase.js";
import "firebase/firestore";

const Profile = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [updateComplete, setUpdateComplete] = useState(false);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        firstName: firstName,
        lastName: lastName
      })
      .then(() => {
        setUpdateComplete(true);
      });
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
          />
        </div>
        <div>
          <Input
            onChange={e => setLastName(e.target.value)}
            name="lastName"
            placeholder="Last name"
            autoComplete="family-name"
          />
        </div>
        <div>
          <Button onClick={e => onClickSubmit(e)}>SUBMIT</Button>
        </div>
      </Form>
    </>
  );
};

export default Profile;
