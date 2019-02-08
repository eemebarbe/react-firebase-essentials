import React, { useState } from "react";

const ToastContext = React.createContext("");

export const ToastProvider = props => {
  const [message, sendMessage] = useState("asdfasdfsadfsaedfrasdf");

  return (
    <ToastContext.Provider value={{ message, sendMessage }}>
      {props.children}
    </ToastContext.Provider>
  );
};

export const ToastConsumer = Component => {
  return props => {
    return (
      <ToastContext.Consumer>
        {context => <Component {...props} toastContext={context} />}
      </ToastContext.Consumer>
    );
  };
};
