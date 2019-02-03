import React from "react";
import "../App.css";

const Button = props => {
  return (
    <input
      type="button"
      className="button"
      onClick={props.onClick}
      value={props.value}
    />
  );
};

export default Button;
