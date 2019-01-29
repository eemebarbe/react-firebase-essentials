import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Lander from "./containers/Lander";
import SignIn from "./containers/SignIn";
import Search from "./containers/Search";
import Confirmed from "./containers/Confirmed";
import Profile from "./containers/Profile";
import Header from "./containers/Header";

import firebase from "./firebase.js";

class App extends Component {
  state = {
    initializationComplete: false,
    userId: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        const userId = firebase.auth().currentUser.uid;
        this.setState({
          userId: userId
        });
      } else {
        this.setState({
          userId: null
        });
      }
      this.setState({
        initializationComplete: true
      });
    });
  }

  signOut = () => {
    firebase.auth().signOut();
  };

  noMatch = () => {
    return <>404</>;
  };

  nestedSwitch = () => {
    return (
      <>
        {this.state.userId && <Header />}
        <Switch>
          <Route
            exact
            path={"/"}
            render={() =>
              this.state.userId ? (
                <Redirect
                  to={{
                    pathname: "/search"
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
              this.state.userId ? (
                <Redirect
                  to={{
                    pathname: "/search"
                  }}
                />
              ) : (
                <SignIn />
              )
            }
          />
          <Route
            path={"/search"}
            render={() =>
              !this.state.userId ? (
                <Redirect
                  to={{
                    pathname: "/signin"
                  }}
                />
              ) : (
                <Search />
              )
            }
          />
          <Route
            path={"/profile"}
            render={() =>
              !this.state.userId ? (
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
          <Route path="*" render={this.noMatch} />
        </Switch>
      </>
    );
  };

  router = () => {
    return (
      <Router>
        <Switch>
          <Route path={"/confirmed"} render={() => <Confirmed />} />
          <Route path="*" render={this.nestedSwitch} />
        </Switch>
      </Router>
    );
  };

  renderApp = () => {
    const app = !this.state.initializationComplete ? (
      <div>Initializing...</div>
    ) : (
      this.router()
    );
    return app;
  };

  render() {
    return <div>{this.renderApp()}</div>;
  }
}

export default App;
