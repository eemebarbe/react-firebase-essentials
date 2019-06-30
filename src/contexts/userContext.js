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
    case "email":
      return {
        ...state,
        userData: {
          email: action.payload.email,
          firstName: state.userData.firstName,
          lastName: state.userData.lastName
        }
      };
    case "updateProfile":
      return {
        ...state,
        userData: {
          email: state.userData.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        }
      };
    case "additionalInfo":
      return {
        ...state,
        userData: {
          email: state.userData.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          pushTokenWeb: action.payload.pushTokenWeb
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
