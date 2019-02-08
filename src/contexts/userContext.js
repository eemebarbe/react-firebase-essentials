import React, { useReducer, createContext } from "react";

const initialState = { userId: null };
const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "userId":
      return { ...state, userId: action.value };
    default:
      return state;
  }
};

export const UserProvider = props => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserConsumer = Component => {
  return props => {
    return (
      <UserContext.Consumer>
        {context => <Component {...props} userContext={context} />}
      </UserContext.Consumer>
    );
  };
};
