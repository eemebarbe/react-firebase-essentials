import React from "react";
import styled from "styled-components";
import { metrics, icons, colors } from "../themes";

const SocialAuthIcon = styled.img`
  width: ${metrics.baseUnit * 1.5}px;
  height: ${metrics.baseUnit * 1.5}px;
  margin: ${metrics.baseUnit * 0.75}px;
  margin-right: 0;
  src: ${props => props.src};
`;

const GoogleAuthIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 3px;
  src: ${props => props.src};
`;

const Button = styled.div`
  width: ${metrics.baseUnit * 16}px;
  height: ${metrics.baseUnit * 3}px;
  font-size: ${metrics.baseUnit * 1}px;
  margin-bottom: ${metrics.baseUnit * 1}px;
  color: white;
  background-color: ${colors.primarybutton};
  display: flex;
  align-items: center;
  font-family: "Kollektif-Bold";
  cursor: pointer;
  span {
    margin: 0 auto;
  }
  div {
    width: ${metrics.baseUnit * 2}px;
    height: ${metrics.baseUnit * 2}px;
    margin: ${metrics.baseUnit * 0.5}px;
    margin-right: 0;
    background-color: white;
    border-radius: 2px;
  }
`;

export const FacebookAuth = props => {
  return (
    <div onClick={props.onClick}>
      <Button>
        <SocialAuthIcon src={icons.facebook} />
        <span>SIGN IN WITH FACEBOOK</span>
      </Button>
    </div>
  );
};

export const GoogleAuth = props => {
  return (
    <div>
      <Button>
        <div>
          <GoogleAuthIcon src={icons.google} />
        </div>
        <span>SIGN IN WITH GOOGLE</span>
      </Button>
    </div>
  );
};
