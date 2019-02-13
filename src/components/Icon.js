import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Icon = styled.img`
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 3}px;
  src: url(${props => props.src});
  color: white;
`;

const IconWithButton = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: inherit;
  background-color: transparent;
`;

const wrappedIcon = props => {
  return (
    <IconWithButton>
      <Icon {...props} />
    </IconWithButton>
  );
};

export default wrappedIcon;
