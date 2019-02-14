import React from "react";
import styled from "styled-components";
import { Spinner, Button } from "../components";
import { metrics, icons, colors } from "../themes";

const SocialAuthIcon = styled.img`
  width: ${metrics.baseUnit * 1.5}px;
  height: ${metrics.baseUnit * 1.5}px;
  margin: ${metrics.baseUnit * 0.75}px;
  margin-right: 0;
  src: ${props => props.src};
`;

const GoogleAuthWrapper = styled.div`
  width: ${metrics.baseUnit * 2}px;
  height: ${metrics.baseUnit * 2}px;
  margin: ${metrics.baseUnit * 0.5}px;
  margin-right: 0;
  background-color: white;
  border-radius: 2px;
  img {
    width: 18px;
    height: 18px;
    margin: 3px;
    src: ${props => props.src};
  }
`;

const GoogleAuthIcon = props => {
  return (
    <GoogleAuthWrapper {...props}>
      <img {...props} />
    </GoogleAuthWrapper>
  );
};

const AuthButton = styled(Button)`
  display: flex;
  align-items: center;
  span {
    margin: 0 auto;
  }
`;

const SocialConstructor = props => {
  return (
    <AuthButton {...props} onClick={props.onClick}>
      {props.children}
      <span>SIGN IN WITH {props.company}</span>
    </AuthButton>
  );
};

export const FacebookAuth = props => {
  return (
    <SocialConstructor {...props} company="FACEBOOK" onClick={props.onClick}>
      <SocialAuthIcon src={icons.facebook} />
    </SocialConstructor>
  );
};

export const GoogleAuth = props => {
  return (
    <SocialConstructor {...props} company="GOOGLE" onClick={props.onClick}>
      <GoogleAuthIcon src={icons.google} />
    </SocialConstructor>
  );
};
