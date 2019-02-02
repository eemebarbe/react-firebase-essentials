import React from "react";

const Button = props => {
  return (
    <input
      type="button"
      style={{ height: "50px", width: "100px", backgroundColor: "blue" }}
      onClick={props.onClick}
      value={props.value}
    />
  );
};

export default Button;
