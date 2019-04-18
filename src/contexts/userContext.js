import React, { useReducer, createContext } from "react";

const initialState = {
  userId: null,
  userData: { email: null, firstName: null, lastName: null },
  styleMode: "main",
  verifying: false
};
export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "persistedUser":
      return { ...action.payload };
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
          lastName: action.payload.lastName
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
  if (userState.userId) {
    window.localStorage.setItem("userData", JSON.stringify(userState));
  }
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
