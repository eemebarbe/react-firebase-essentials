import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import { OverlayProvider } from "./contexts/overlayContext";
import MainRouter from "./MainRouter";
import GlobalStyle from "./themes/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastProvider>
        <UserProvider>
          <OverlayProvider>
            <MainRouter />
          </OverlayProvider>
        </UserProvider>
      </ToastProvider>
    </>
  );
};

export default App;
