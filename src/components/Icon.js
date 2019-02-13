import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Icon = styled.img`
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 3}px;
  src: url(${props => props.src});
  a {
    height: ${metrics.baseUnit * 3}px;
  }
`;

const wrappedIcon = props => {
  return (
    <a href={"http://github.com/eemebarbe/react-firebase-essentials"}>
      <Icon {...props} />
    </a>
  );
};

export default wrappedIcon;
