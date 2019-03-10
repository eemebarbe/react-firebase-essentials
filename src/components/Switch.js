import React from "react";
import styled from "styled-components";
import { metrics, colors } from "../themes";

const Switched = styled.label`
  position: relative;
  display: inline-block;
  width: ${metrics.baseUnit * 8}px;
  height: ${metrics.baseUnit * 3}px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: darkgray;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: ${metrics.baseUnit * 3}px;
    &:before {
      position: absolute;
      content: "";
      height: ${metrics.baseUnit * 2}px;
      width: ${metrics.baseUnit * 2}px;
      left: ${metrics.baseUnit / 2}px;
      bottom: ${metrics.baseUnit / 2}px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: ${colors.primarybutton};
  }

  input:checked + span:before {
    -webkit-transform: translateX(${metrics.baseUnit * 5}px);
    -ms-transform: translateX(${metrics.baseUnit * 5}px);
    transform: translateX(${metrics.baseUnit * 5}px);
  }
`;

const Switch = () => {
  return (
    <Switched>
      <input type="checkbox" />
      <span />
    </Switched>
  );
};

export default Switch;
