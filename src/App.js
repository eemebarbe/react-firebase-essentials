import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { ToastProvider } from "./contexts/toastContext";
import Toast from "./components/Toast";
import Lander from "./containers/Lander";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";
import Confirmed from "./containers/Confirmed";
import Profile from "./containers/Profile";
import Header from "./containers/Header";

import firebase from "./firebase.js";

const App = props => {
  const [initializationComplete, setInitComplete] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        const user = firebase.auth().currentUser.uid;
        setUserId(user);
      } else {
        setUserId(null);
      }
      setInitComplete(true);
    });
  }, {});

  const noMatch = () => {
    return <>404</>;
  };

  const nestedSwitch = () => {
    return (
      <ToastProvider>
        {userId && <Header />}
        <Toast />
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
      </ToastProvider>
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

  return <>{renderApp()}</>;
};

export default App;
