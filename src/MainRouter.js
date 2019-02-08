import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Toast from "./components/Toast";
import Lander from "./containers/Lander";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";
import Confirmed from "./containers/Confirmed";
import Profile from "./containers/Profile";
import Header from "./containers/Header";
import { UserConsumer } from "./contexts/userContext";

import firebase from "./firebase.js";

const MainRouter = props => {
  const [initializationComplete, setInitComplete] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        const user = firebase.auth().currentUser.uid;
        props.userContext.userDispatch({ type: "user", value: user });
      } else {
        props.userContext.userDispatch({ type: "user", value: null });
      }
      setInitComplete(true);
    });
  }, {});

  const noMatch = () => {
    return <>404</>;
  };

  const nestedSwitch = () => {
    return (
      <>
        {props.userContext.userState.user && <Header />}
        <Toast />
        <Switch>
          <Route
            exact
            path={"/"}
            render={() =>
              props.userContext.userState.user ? (
                <Redirect
                  to={{
                    pathname: "/dashboard"
                  }}
                />
              ) : (
                <Lander />
              )
            }
          />
          <Route
            path={"/signin"}
            render={() =>
              props.userContext.userState.user ? (
                <Redirect
                  to={{
                    pathname: "/dashboard"
                  }}
                />
              ) : (
                <SignIn />
              )
            }
          />
          <Route
            path={"/dashboard"}
            render={() =>
              !props.userContext.userState.user ? (
                <Redirect
                  to={{
                    pathname: "/signin"
                  }}
                />
              ) : (
                <Dashboard />
              )
            }
          />
          <Route
            path={"/profile"}
            render={() =>
              !props.userContext.userState.user ? (
                <Redirect
                  to={{
                    pathname: "/signin"
                  }}
                />
              ) : (
                <Profile />
              )
            }
          />
          <Route path="*" render={noMatch} />
        </Switch>
      </>
    );
  };

  const router = () => {
    return (
      <Router>
        <Switch>
          <Route path={"/confirmed"} render={() => <Confirmed />} />
          <Route path="*" render={nestedSwitch} />
        </Switch>
      </Router>
    );
  };

  const renderApp = () => {
    const app = !initializationComplete ? <div>Initializing...</div> : router();
    return app;
  };

  return renderApp();
};

export default UserConsumer(MainRouter);
