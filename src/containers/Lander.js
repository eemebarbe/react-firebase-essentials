import React from "react";
import { H1, H2, P, Button, BodyWrapper } from "../components";
import { withRouter } from "react-router-dom";

const Lander = props => {
  const signIn = () => {
    props.history.push("/signin");
  };

  return (
    <BodyWrapper>
      <H1>React Firebase Essentials</H1>
      <H2>This thing ain't ready yet. But when it is, oh boy:</H2>
      <P>
        <li>All components are built with Hooks</li>
        <li>Utilizing the Context API for shared data</li>
        <li>Styled-Components all day, baybeeee</li>
        <li>
          Authentication UI flows already built out for email, Facebook and
          Google
        </li>
        <li>Toast popup system already set up for user feedback</li>
        <li>VERY few dependencies</li>
        <li>Basic security rules written for Firestore</li>
        <li>A pinch of mother's love</li>
      </P>
      <Button onClick={signIn}>Take a Tour</Button>
    </BodyWrapper>
  );
};

export default withRouter(Lander);
