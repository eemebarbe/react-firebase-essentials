import React from "react";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <MainRouter />
      </UserProvider>
    </ToastProvider>
  );
};

export default App;
