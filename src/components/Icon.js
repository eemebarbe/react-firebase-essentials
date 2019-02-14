import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Link = styled.a`
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 3}px;
  img {
    height: ${metrics.baseUnit * 3}px;
    width: ${metrics.baseUnit * 3}px;
    src: url(${props => props.src});
  }
`;

const wrappedIcon = props => {
  return (
    <Link href={"http://github.com/eemebarbe/react-firebase-essentials"}>
      <img {...props} />
    </Link>
  );
};

export default wrappedIcon;
