import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";
import { Spinner } from "../components";

const Button = styled.button`
  min-height: ${metrics.baseUnit * 3}px;
  width: ${metrics.baseUnit * 16}px;
  background-color: ${props => props.color || props.theme.primarybutton};
  color: ${props => props.theme.detailText};
  border: 0;
  padding: 0;
  border-radius: ${metrics.globalBorderRadius}px;
  margin-left: ${props => (props.marginLeft ? metrics.baseUnit + "px" : 0)};
  margin-right: ${props => (props.marginRight ? metrics.baseUnit + "px" : 0)};
  margin-bottom: ${props => (props.marginBottom ? metrics.baseUnit + "px" : 0)};
  margin-top: ${props => (props.marginTop ? metrics.baseUnit + "px" : 0)};
  font-size: 1rem;
  cursor: pointer;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kollektif-Bold";
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ButtonWithLoadState = props => {
  const loadState = () => {
    if (props.loading) {
      return <Spinner />;
    } else {
      return props.children;
    }
  };
  return <Button {...props}>{loadState()}</Button>;
};

export default ButtonWithLoadState;
