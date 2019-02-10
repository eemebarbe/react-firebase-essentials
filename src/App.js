import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import MainRouter from "./MainRouter";
import { createGlobalStyle } from "styled-components";
import Kollektif from "./themes/fonts/Kollektif-Bold.ttf";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    @font-face {
      font-family: 'Kollektif-Bold';
      src: url('${Kollektif}') format('truetype');
    }
    font-family: 'Kollektif-Bold';
  }
  #root {
      height: 100%; 
  }`;

const App = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <GlobalStyle />
        <MainRouter />
      </UserProvider>
    </ToastProvider>
  );
};

export default App;
