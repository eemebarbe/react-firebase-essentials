import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import firebase from "../firebase.js";
import "firebase/firestore";
import { type } from "os";
const db = firebase.firestore();

const Dashboard = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [moreInfoComplete, setMoreInfoComplete] = useState(false);

  const onClickSubmit = e => {
    e.preventDefault();
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        firstName: firstName,
        lastName: lastName
      })
      .then(() => {
        setMoreInfoComplete(true);
      });
  };

  const moreInfo = () => {
    return (
      <form>
        <Input
          onChange={e => setFirstName(e.target.value)}
          name="firstName"
          placeholder="First name"
          autoComplete="given-name"
        />
        <Input
          onChange={e => setLastName(e.target.value)}
          name="lastName"
          placeholder="Last name"
          autoComplete="family-name"
        />
        <Button onClick={e => onClickSubmit(e)}>Submit</Button>
      </form>
    );
  };

  const dashboard = <>DASHBOARD</>;

  return moreInfoComplete ? dashboard : moreInfo();
};

export default Dashboard;
