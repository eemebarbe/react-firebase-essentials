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
        A React-Hooks based app template, built on Firebase, that did all of the
        boring stuff for you!
      </H2>
      <P>
        <li>
          Modern authentication UI flows have already been built out, it's as
          simple as plugging in your Firebase API keys. Email, Facebook and
          Google are all included methods.
        </li>
        <li>
          Basic security rules have already been written for the database.
        </li>
        <li>
          It's built entirely with React Hooks and the new Context API. Built on
          top of Create-React-App.
        </li>
        <li>Mobile-ready responsive design.</li>
        <li>
          Push Notifications set up out of the box, with a cloud function
          supplied for triggering messages.
        </li>
        <li>
          Utilizes Styled-Components, carefully using global variables that
          allow you to quickly and easily adjust to your tastes.
        </li>
        <li>Requires very few dependencies.</li>
        <li>Dark Mode! You gotta have dark mode!</li>
      </P>
      <Button onClick={signIn}>Take a Tour</Button>
    </BodyWrapper>
  );
};

export default withRouter(Lander);
