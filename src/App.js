import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import MainRouter from "./MainRouter";
import GlobalStyle from "./themes/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastProvider>
        <UserProvider>
          <MainRouter />
        </UserProvider>
      </ToastProvider>
    </>
  );
};

export default App;
