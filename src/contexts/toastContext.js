import React, { useState } from "react";

export const ToastContext = React.createContext("");

export const ToastProvider = props => {
  const [message, sendMessage] = useState("");
  return (
    <ToastContext.Provider value={{ message, sendMessage }}>
      {props.children}
    </ToastContext.Provider>
  );
};
