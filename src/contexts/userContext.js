import React, { useReducer, createContext } from "react";
const styleMode = window.localStorage.getItem("styleMode");

const initialState = {
  userId: null,
  userData: {
    email: null,
    firstName: null,
    lastName: null,
    pushTokenWeb: null
  },
  styleMode: styleMode ? styleMode : "main",
  verifying: false
};
export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "userId":
      return { ...state, userId: action.payload };
    case "verifying":
      return { ...state, verifying: action.payload };
    case "updateProfile":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload
        }
      };
    case "styleMode":
      return { ...state, styleMode: action.payload };
    case "signOut":
      return { ...initialState };
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
