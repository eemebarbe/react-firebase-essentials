import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Link = styled.a`
  height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 3}px;
  margin-left: ${props => (props.marginLeft ? metrics.baseUnit + "px" : 0)};
  margin-right: ${props => (props.marginRight ? metrics.baseUnit + "px" : 0)};
  margin-bottom: ${props => (props.marginBottom ? metrics.baseUnit + "px" : 0)};
  margin-top: ${props => (props.marginTop ? metrics.baseUnit + "px" : 0)};
  cursor: pointer;
  img {
    height: ${metrics.baseUnit * 3}px;
    width: ${metrics.baseUnit * 3}px;
    src: url(${props => props.src});
  }
`;

const wrappedIcon = props => {
  return (
    <Link {...props} href={props.linkTo}>
      <img alt="icon" {...props} />
    </Link>
  );
};

export default wrappedIcon;
