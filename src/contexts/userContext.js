import React, { useReducer, createContext } from "react";

const initialState = {
  userId: null,
  userData: { email: null, firstName: null, lastName: null },
  styleMode: null
};
export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "persistedUser":
      return { ...action.payload };
    case "userId":
      return { ...state, userId: action.payload };
    case "additionalInfo":
      return {
        ...state,
        userData: {
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        }
      };
    case "styleMode":
      return { ...state, styleMode: action.payload };
    default:
      return state;
  }
};

export const UserProvider = props => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  userState.userData.email &&
    window.localStorage.setItem("user", JSON.stringify(userState));
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
