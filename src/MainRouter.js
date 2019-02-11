import React, { useState, useEffect, useContext } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Toast from "./components/Toast";
import CenteredDiv from "./components/CenteredDiv";
import H1 from "./components/H1";
import Lander from "./containers/Lander";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";
import Confirmed from "./containers/Confirmed";

import Profile from "./containers/Profile";
import Header from "./containers/Header";
import { UserContext } from "./contexts/userContext";

import { metrics } from "./themes";
import styled from "styled-components";

import firebase from "./firebase.js";
import "firebase/firestore";
const db = firebase.firestore();

const RouterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RouterWrapperInner = styled.div`
  width: ${metrics.bodyWidth}px;
  height: 100%;
`;

const MainRouter = () => {
  const [initializationComplete, setInitComplete] = useState(false);
  const { userDispatch } = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        const user = firebase.auth().currentUser.uid;
        let persistedUser = window.localStorage.getItem("userData");
        if (!persistedUser) {
          db.collection("users")
            .doc(user)
            .get()
            .then(res => {
              if (res.data().firstName) {
                userDispatch({ type: "additionalInfo", payload: res.data() });
                window.localStorage.setItem(
                  "userData",
                  JSON.stringify(res.data())
                );
              }
              setInitComplete(true);
            });
        } else {
          userDispatch({
            type: "additionalInfo",
            payload: JSON.parse(persistedUser)
          });
          setInitComplete(true);
        }
      } else {
        userDispatch({ type: "additionalInfo", payload: { firstName: null } });
        setInitComplete(true);
      }
    });
  }, []);

  const noMatch = () => {
    return <H1>404</H1>;
  };

  const nestedSwitch = () => {
    const userId =
      firebase.auth().currentUser && firebase.auth().currentUser.uid;
    return (
      <>
        {userId && <Header />}
        <Toast />
        <RouterWrapper>
          <RouterWrapperInner>
            <Switch>
              <Route
                exact
                path={"/"}
                render={() =>
                  userId ? (
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
                  userId ? (
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
                  !userId ? (
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
                  !userId ? (
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
          </RouterWrapperInner>
        </RouterWrapper>
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
    const app = !initializationComplete ? (
      <CenteredDiv vertical horizontal>
        Initializing...
      </CenteredDiv>
    ) : (
      router()
    );
    return app;
  };

  return renderApp();
};

export default MainRouter;
