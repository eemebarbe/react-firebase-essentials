import React, { useState, useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { UserContext } from "../contexts/userContext";
import firebase from "../firebase.js";
import "firebase/firestore";
import { type } from "os";
const db = firebase.firestore();

const Dashboard = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [moreInfoComplete, setMoreInfoComplete] = useState(false);
  const { userState } = useContext(UserContext);

  const onClickSubmit = e => {
    e.preventDefault();
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set(
        {
          firstName: firstName,
          lastName: lastName
        },
        { merge: true }
      )
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

  const dashboard = () => {
    return <>DASHBOARD</>;
  };

  return moreInfoComplete || userState.email ? dashboard() : moreInfo();
};

export default Dashboard;
