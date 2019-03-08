import React, { useState } from "react";

export const OverlayContext = React.createContext("");

export const OverlayProvider = props => {
  const [page, setPage] = useState("");
  return (
    <OverlayContext.Provider value={{ page, setPage }}>
      {props.children}
    </OverlayContext.Provider>
  );
};
