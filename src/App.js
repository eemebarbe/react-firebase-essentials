import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import { OverlayProvider } from "./contexts/overlayContext";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <OverlayProvider>
          <MainRouter />
        </OverlayProvider>
      </UserProvider>
    </ToastProvider>
  );
};

export default App;
