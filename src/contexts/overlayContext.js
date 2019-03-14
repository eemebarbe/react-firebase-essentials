import React, { useState } from "react";

export const OverlayContext = React.createContext("");

export const OverlayProvider = props => {
  const [page, setOverlay] = useState("");
  return (
    <OverlayContext.Provider value={{ page, setOverlay }}>
      {props.children}
    </OverlayContext.Provider>
  );
};
