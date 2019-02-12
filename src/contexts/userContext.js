import React, { useReducer, createContext } from "react";

const initialState = {
  userId: null,
  email: null,
  firstName: null,
  lastName: null
};
export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "userId":
      return { ...state, userId: action.payload };
    case "additionalInfo":
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
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
