import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { metrics, icons } from "../themes";

const AuthButton = styled(Button)`
  span {
    width: ${metrics.baseUnit * 16.5}px;
  }
`;

const AuthIcon = styled.div`
  width: ${metrics.baseUnit * 2.5}px;
  height: ${metrics.baseUnit * 4}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    width: ${metrics.baseUnit * 2}px;
    height: ${metrics.baseUnit * 2}px;
    background-color: ${props =>
      props.background ? props.theme.detailText : null};
    border-radius: ${metrics.globalBorderRadius / 2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${props =>
        props.background ? metrics.baseUnit * 1.5 : metrics.baseUnit * 2}px;
      height: ${props =>
        props.background ? metrics.baseUnit * 1.5 : metrics.baseUnit * 2}px;
      src: ${props => props.src};
    }
  }
`;

const SocialConstructor = props => {
  return (
    <AuthButton {...props} onClick={props.onClick}>
      <AuthIcon {...props}>
        <div {...props}>
          <img alt="social-icon" src={props.logo} />
        </div>
      </AuthIcon>
      <span>Sign in with {props.company}</span>
    </AuthButton>
  );
};

export const FacebookAuth = props => {
  return (
    <SocialConstructor
      {...props}
      logo={icons.facebook}
      company="Facebook"
      onClick={props.onClick}
    />
  );
};

export const GoogleAuth = props => {
  return (
    <SocialConstructor
      background
      {...props}
      logo={icons.google}
      company="Google"
      onClick={props.onClick}
    />
  );
};
