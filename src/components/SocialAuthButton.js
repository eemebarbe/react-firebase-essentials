import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { metrics, icons } from "../themes";

const LogoWrapper = styled.div`
  width: ${metrics.baseUnit * 3}px;
  height: ${metrics.baseUnit * 3}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialAuthIcon = styled.img`
  width: ${metrics.baseUnit * 1.5}px;
  height: ${metrics.baseUnit * 1.5}px;
  src: ${props => props.src};
`;

const GoogleAuthWrapper = styled.div`
  width: ${metrics.baseUnit * 2}px;
  height: ${metrics.baseUnit * 2}px;
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
  span {
    text-align: center;
    width: ${metrics.baseUnit * 13}px;
  }
`;

const SocialConstructor = props => {
  return (
    <AuthButton {...props} onClick={props.onClick}>
      <LogoWrapper>{props.children}</LogoWrapper>
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
