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
      <H2>
        A fully-featured single-page app template, hosted and running in
        minutes. Based on Create-React-App and Firebase. Written with
        React-Hooks.
      </H2>
      <P>
        <li>
          Modern authentication and onboarding UI flows have already been built
          out, it's as simple as plugging in your Firebase API keys.
        </li>
        <li>Mobile-ready responsive design.</li>
        <li>
          Utilizes Styled-Components, carefully using global variables that
          allow you to quickly and easily adjust to your tastes.
        </li>
        <li>
          It's built entirely with React Hooks and the new Context API. Built on
          top of Create-React-App.
        </li>
        <li>
          Requires very few dependencies. The least popular module it uses has
          6.4k stars on Github.
        </li>
        <li>
          Basic security rules have already been written for the Firestore DB.
        </li>
        <li>
          Push Notifications set up out of the box, with a cloud function
          supplied for triggering messages.
        </li>
        <li>Dark Mode! You gotta have dark mode!</li>
      </P>
      <Button onClick={signIn}>Take a Tour</Button>
    </BodyWrapper>
  );
};

export default withRouter(Lander);
