import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { metrics, icons } from "../themes";

const LogoWrapper = styled.div`
  width: ${metrics.baseUnit * 2.5}px;
  height: ${metrics.baseUnit * 3}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    width: ${metrics.baseUnit * 2}px;
    height: ${metrics.baseUnit * 2}px;
    background-color: ${props => (props.background ? "white" : null)};
    border-radius: ${metrics.globalBorderRadius / 2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${metrics.baseUnit * 1.5}px;
      height: ${metrics.baseUnit * 1.5}px;
      src: ${props => props.src};
    }
  }
`;

const IconWrapper = styled.div`
  width: ${metrics.baseUnit * 2}px;
  height: ${metrics.baseUnit * 2}px;
  background-color: ${props => (props.background ? "white" : null)};
  border-radius: ${metrics.globalBorderRadius / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${metrics.baseUnit * 1.5}px;
    height: ${metrics.baseUnit * 1.5}px;
    src: ${props => props.src};
  }
`;

const CompanyIcon = props => {
  return (
    <IconWrapper {...props}>
      <img {...props} />
    </IconWrapper>
  );
};

const AuthButton = styled(Button)`
  span {
    text-align: center;
    width: ${metrics.baseUnit * 13.5}px;
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
      <CompanyIcon src={icons.facebook} />
    </SocialConstructor>
  );
};

export const GoogleAuth = props => {
  return (
    <SocialConstructor {...props} company="GOOGLE" onClick={props.onClick}>
      <CompanyIcon background src={icons.google} />
    </SocialConstructor>
  );
};
