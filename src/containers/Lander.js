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
        - All components are built with Hooks
        <br /> - Utilizing the Context API for shared data
        <br /> - Styled-Components all day, baybeeee
        <br /> - Authentication UI flows already built out for email, Facebook
        and Google
        <br /> - Toast popup system already set up for user feedback
        <br /> - VERY few dependencies
        <br /> - Cloud function for processing recaptchas
        <br /> - Basic security rules written for Firestore
        <br /> - A pinch of mother's love
      </Text>
      <Button marginBottom onClick={signIn}>
        SIGN UP
      </Button>
    </>
  );
};

export default withRouter(Lander);
