import React, { useReducer, createContext } from "react";

const initialState = { userId: null };
export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "userId":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
