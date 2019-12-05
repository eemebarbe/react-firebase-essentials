import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Lander from "./containers/Lander";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";
import Confirmed from "./containers/Confirmed";
import Profile from "./containers/Profile";
import Header from "./containers/Header";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import { UserContext } from "./contexts/userContext";
import {
  CenteredDiv,
  H1,
  Toast,
  Spinner,
  MobileMenuBar,
  BodyWrapper,
  P
} from "./components";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import firebase from "./firebase.js";
import "firebase/firestore";
import { colors } from "./themes";
import { sendPushNotification } from "./helpers/cloudFunctions";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`;

const MainRouter = () => {
  const [initializationComplete, setInitComplete] = useState(false);
  const { userState, userDispatch } = useContext(UserContext);
  const userId = userState.userId;
  const db = firebase.firestore();

  useEffect(() => {
    sendPushNotification({
      token: userState.userData.pushTokenWeb,
      title: "Boop",
      body: "shoop"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        const uid = firebase.auth().currentUser.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then(res => {
            if (res.data() && res.data().firstName) {
              userDispatch(
                { type: "updateProfile", payload: res.data() },
                { type: "verifying", payload: false }
              );
            }
            userDispatch({ type: "userId", payload: uid });
            setInitComplete(true);
          });
      } else {
        userDispatch({
          type: "signOut"
        });
        setInitComplete(true);
      }
    });
  }, []);

  const noMatch = () => {
    return (
      <BodyWrapper>
        <H1>Oops!</H1>
        <P>You're looking for a page that doesn't exist.</P>
      </BodyWrapper>
    );
  };

  const routeWithAuth = destination => {
    return !userId ? (
      <Redirect
        to={{
          pathname: "/signin"
        }}
      />
    ) : (
      destination
    );
  };

  const reRouteIfAuthenticated = destination => {
    return userId ? (
      <Redirect
        to={{
          pathname: "/dashboard"
        }}
      />
    ) : (
      destination
    );
  };

  const nestedSwitch = () => {
    return (
      <>
        {userId && <MobileMenuBar />}
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup appear>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route
                    exact
                    path={"/"}
                    render={() => reRouteIfAuthenticated(<Lander />)}
                  />
                  <Route
                    path={"/signin"}
                    render={() => reRouteIfAuthenticated(<SignIn />)}
                  />
                  <Route
                    path={"/dashboard"}
                    render={() => routeWithAuth(<Dashboard />)}
                  />
                  <Route
                    path={"/profile"}
                    render={() => routeWithAuth(<Profile />)}
                  />
                  <Route
                    path={"/privacy-policy"}
                    render={() => <PrivacyPolicy />}
                  />
                  <Route path="*" render={noMatch} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    );
  };

  const router = () => {
    return (
      <Router>
        <>
          <Toast />
          <Switch>
            <Route path={"/confirmed"} render={() => <Confirmed />} />
            <Route path="*" render={nestedSwitch} />
          </Switch>
        </>
      </Router>
    );
  };

  const renderApp = () => {
    const app = !initializationComplete ? (
      <CenteredDiv vertical horizontal>
        <Spinner large secondary />
      </CenteredDiv>
    ) : (
      router()
    );
    return app;
  };

  const styleMode = window.localStorage.getItem("styleMode");
  return (
    <ThemeProvider
      theme={styleMode && styleMode === "dark" ? colors.dark : colors.main}
    >
      <>
        <GlobalStyle />
        <AppWrapper>{renderApp()}</AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default MainRouter;
