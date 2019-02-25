import React from "react";
import { H1, H2, Text, Button } from "../components";
import { withRouter } from "react-router-dom";

const Lander = props => {
  const signIn = () => {
    props.history.push("/signin");
  };

  return (
    <>
      <H1>REACT-FIREBASE-ESSENTIALS</H1>
      <H2>This thing ain't ready yet. But when it is, oh boy:</H2>
      <Text>
        <li>All components are built with Hooks</li>
        <li>Utilizing the Context API for shared data</li>
        <li>Styled-Components all day, baybeeee</li>
        <li>
          Authentication UI flows already built out for email, Facebook and
          Google
        </li>
        <li>Toast popup system already set up for user feedback</li>
        <li>VERY few dependencies</li>
        <li>Cloud function for processing recaptchas</li>
        <li>Basic security rules written for Firestore</li>
        <li>A pinch of mother's love</li>
      </Text>
      <Button marginBottom onClick={signIn}>
        SIGN UP
      </Button>
    </>
  );
};

export default withRouter(Lander);
