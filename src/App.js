import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import MainRouter from "./MainRouter";
import GlobalStyle from "./themes/GlobalStyle";

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
